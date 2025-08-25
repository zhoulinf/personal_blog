import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import {Exclude, Transform} from 'class-transformer';

export class UserDto {

  @Exclude()
  id: number;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Transform(() => undefined, {toPlainOnly: true})
  password: string;

  @IsNotEmpty()
  mobile: string;

  @Exclude()
  status: number;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}
