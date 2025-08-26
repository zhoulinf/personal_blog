import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import {Exclude, Transform} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

export class UserDto {

  @Exclude()
  id: number;

  @ApiProperty({
    description: '用户名称',
    type: 'string',
    example: 'zhoulinfeng',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: '用户邮箱',
    type: 'string',
    example: '1831792459@qq.com',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: '密码',
    type: 'string',
    example: 'root',
    required: true,
  })
  @IsString()
  @Transform(() => undefined, {toPlainOnly: true})
  password: string;

  @ApiProperty({
    description: '手机号',
    type: 'string',
    example: '17361436756',
    required: true,
  })
  @IsNotEmpty()
  mobile: string;

  @Exclude()
  status: number;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}
