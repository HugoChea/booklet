import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './strategies/local-auth.guard';

@Controller('auth')
export class AuthController {

    @Get('test')
    getHello(): string {
        return "hello";
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req) {
        return "ok";
    }
}
