import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register-dto';
import { User } from 'src/users/schemas/user.schema';
import { ErrorMessage } from 'src/common/enums/error-message.enum';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<User> {
        const user: User = await this.userService.findOneByUsername(username);

        if (!user) {
            throw new Error(ErrorMessage.USER_DOES_NOT_EXIST);
        }

        if (!await bcrypt.compare(
            password,
            user.password
        )) {
            throw new Error(ErrorMessage.INCORRECT_PASSWORD);
        }
        return user;
    }

    async login(user: User) : Promise<{ access_token: string; }> {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(registerDto: RegisterDto): Promise<User> {
        const user = await this.userService.findOneByUsernameOrEmail(registerDto.username, registerDto.email);
        if (user) {
            if (user.username === registerDto.username) {
                throw new Error(ErrorMessage.USERNAME_ALREADY_USED);
            }
            if (user.email === registerDto.email) {
                throw new Error(ErrorMessage.EMAIL_ALREADY_USED);
            }
        }

        registerDto.password = await bcrypt.hash(registerDto.password, 10);

        return this.userService.createUser(registerDto);
    }
}
