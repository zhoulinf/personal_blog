
import {ApiProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class LoginDto {

  @ApiProperty({
    description: '登陆用户名称',
    example: 'zhoulinfeng',
    required: true,
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: '登陆用户密码',
    example: 'root',
    required: true,
  })
  @IsString()
  password: string;
}
