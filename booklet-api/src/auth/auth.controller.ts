import { Body, Controller, Get, HttpCode, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/LoginDto';
import { RegisterDto } from './dto/RegisterDto';
import { JwtAuthGuard } from './guards/jwt-auth-guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @HttpCode(200)
    @Post('login')
    async login(@Body() body: LoginDto) {
        return this.authService.login(
            await this.authService.validateUser(body.username, body.password)
        );
    }

    @Post('register')
    async register(@Body() body: RegisterDto) {
        const registeredUser = await this.authService.register(body);
        if (registeredUser){
            return "User succesfully registered";
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('test')
    getHello(): string {
        return "hello";
    }
}
