import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from './user.service';

import {UserDto} from './dto/user.dto';
import {plainToInstance} from 'class-transformer';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post('add')
  add(@Body() user: UserDto) {
    const userEntity = this.userService.add(user);
    return plainToInstance(UserDto, userEntity);
  }
}
