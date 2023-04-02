import { BadRequestException } from '@nestjs/common';
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UtilsService } from '@todo-app/utils';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private utils: UtilsService, private jwtService: JwtService) { }

  async regUser(email: string, name: string, password: string) {
    const user = await this.userService.getByEmail(email);

    if (user) {
      throw new ConflictException('user already exist');
    }

    await this.userService.createUser({
      email, name, password,
    });
  }

  async login(email: string, pass: string): Promise<any> {
    const user = await this.userService.getByEmail(email);
    const passwordHash = this.utils.sha1(pass);

    if (user?.password !== passwordHash) {
      throw new BadRequestException();
    }

    const payload = { email: user.email, sub: user.id, name: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

}
