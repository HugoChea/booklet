import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/LoginDto';
import { JwtAuthGuard } from './guards/jwt-auth-guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() body: LoginDto) {
        return this.authService.login(
            await this.authService.validateUser(body.username, body.password)
        );
    }

    @UseGuards(JwtAuthGuard)
    @Get('test')
    getHello(): string {
        return "hello";
    }
}
