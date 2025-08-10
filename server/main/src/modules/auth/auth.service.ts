import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../user/dto/user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async login(username: string, pass: string) {
    const user = await this.userService.findByName(username);
    if (!user) {
      throw new NotFoundException("用户不存在");
    }
    // todo 密码加密
    if (user.password !== pass) {
      throw new HttpException("账户或者密码错误", HttpStatus.UNAUTHORIZED);
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signup(user: UserDto) {
    return this.userService.add(user);
  }
}
