import { ConflictException, Inject, Injectable, LoggerService, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { LOGGER_TOKEN } from '@src/logger/logger.module';
@Injectable()
export class UserService {

  @Inject(LOGGER_TOKEN)
  private readonly logger: LoggerService

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

  findByName(username: string) {
    return this.usersRepository.findOneBy({ username });
  }

  async add(userDto: UserDto) {
    const user = await this.usersRepository.findOneBy({ username: userDto.username })
    if (user) {
      throw new ConflictException("用户已存在")
    }
    const addUser = new User(userDto)
    // todo 密码加密
    addUser.status = 0
    return this.usersRepository.save(addUser);
  }
}
