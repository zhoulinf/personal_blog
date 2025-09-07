import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LoginDto} from './dto/login.dto';
import {UserDto} from '../user/dto/user.dto';
import {Public} from '@src/common/decorator/public-decorator';
import {ApiBody, ApiOperation, ApiTags} from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Public()
  @ApiOperation({
    summary: '用户登陆',
  })
  @ApiBody({
    type: LoginDto,
  })
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    console.log(loginDto, 'loginDto');
    return this.authService.login(loginDto.username, loginDto.password);
  }

  @Public()
  @ApiOperation({
    summary: '用户注册',
  })
  @ApiBody({type: UserDto})
  @Post('signup')
  async signUp(@Body() user: UserDto) {
    console.log(user, 'user3');
    const userEntity = await this.authService.signup(user);
    return new UserDto(userEntity);
  }
}
