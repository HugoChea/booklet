import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/RegisterDto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);

        if (!user) {
            throw new UnauthorizedException('User does not exist');
        }

        if (!await bcrypt.compare(
            password,
            user.password
          )) {
            throw new UnauthorizedException('Incorrect password');
        }
        return user;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(registerDto: RegisterDto) {
        const user = await this.usersService.findOneByUsernameOrEmail(registerDto.username, registerDto.email);
        if (user) {
            if (user.username === registerDto.username){
                throw new ConflictException('Username already used');
            }
            if (user.email === registerDto.email){
                throw new ConflictException('Email already used');
            }
        }

        registerDto.password = await bcrypt.hash(registerDto.password, 10);

        return this.usersService.createUser(registerDto);
    }
}
