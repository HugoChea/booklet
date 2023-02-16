import { Body, ConflictException, Controller, Get, HttpCode, InternalServerErrorException, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { RegisterDto } from './dto/register-dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth-guard';
import { User } from 'src/users/schemas/user.schema';
import { ErrorMessage } from 'src/common/enums/error-message.enum';
import { ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @HttpCode(200)
    @Post('login')
    @ApiOkResponse({ description: "Successful login"})
    @ApiUnauthorizedResponse({ description: "User does not exit or incorrect password"})
    async login(@Body() body: LoginDto): Promise<{ access_token: string; }> {
        try {
            const user: User = await this.authService.validateUser(body.username, body.password);
            return this.authService.login(user);
        }
        catch (error) {
            if (error.message === ErrorMessage.USER_DOES_NOT_EXIST || error.message === ErrorMessage.INCORRECT_PASSWORD ){
                throw new UnauthorizedException(error.message);
            }
            else {
                throw new InternalServerErrorException(error.message);
            }
        }
    }

    @Post('register')
    @ApiCreatedResponse()
    @ApiConflictResponse()
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
            if (error.message === ErrorMessage.USERNAME_ALREADY_USED || error.message === ErrorMessage.EMAIL_ALREADY_USED){
                throw new ConflictException(error.message);
            }
            else {
                throw new InternalServerErrorException(error.message);
            }
        }
        
    }

    @UseGuards(JwtAuthGuard)
    @Get('test')
    getHello(): string {
        return "hello";
    }
}
