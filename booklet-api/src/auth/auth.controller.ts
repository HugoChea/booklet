import { Body, ConflictException, Controller, Get, HttpCode, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/LoginDto';
import { RegisterDto } from './dto/RegisterDto';
import { JwtAuthGuard } from '../common/guards/jwt-auth-guard';
import { User } from 'src/users/schemas/user.schema';
import { ErrorMessage } from 'src/common/enums/error-message.enum';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @HttpCode(200)
    @Post('login')
    async login(@Body() body: LoginDto): Promise<{ access_token: string; }> {
        try {
            const user: User = await this.authService.validateUser(body.username, body.password);
            return this.authService.login(user);
        }
        catch (error) {
            if (error.message === ErrorMessage.USER_DOES_NOT_EXIST){
                throw new UnauthorizedException(error.message);
            }
            else if (error.message === ErrorMessage.INCORRECT_PASSWORD){
                throw new UnauthorizedException(error.message);
            }
        }
    }

    @Post('register')
    async register(@Body() body: RegisterDto): Promise<{ message: string; }> {
        try {
            const registeredUser = await this.authService.register(body);
            if (registeredUser){
                return {
                    message: "User registered successfully",
                };
            }
        }
        catch (error) {
            if (error.message === ErrorMessage.USERNAME_ALREADY_USED){
                throw new ConflictException(error.message);
            }
            else if (error.message === ErrorMessage.EMAIL_ALREADY_USED){
                throw new ConflictException(error.message);
            }
        }
        
    }

    @UseGuards(JwtAuthGuard)
    @Get('test')
    getHello(): string {
        return "hello";
    }
}
