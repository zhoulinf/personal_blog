import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UserDto } from '../user/dto/user.dto';
import { Public } from '@src/common/decorator/public-decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Public()
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    console.log(loginDto, 'loginDto')
    return this.authService.login(loginDto.username, loginDto.password);
  }

  @Public()
  @Post('signup')
  async signUp(@Body() user: UserDto) {
    console.log(user, 'user3')
    const userEntity = await this.authService.signup(user)
    return new UserDto(userEntity);
  }
}
