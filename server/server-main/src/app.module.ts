import {Module} from '@nestjs/common';
import {UserModule} from '@modules/user/user.module';
import {AuthModule} from '@modules/auth/auth.module';
import {ConfigModule} from '@nestjs/config';
import {configuration} from './config';
import {DatabaseModule} from '@database/database.module';
import {RoleModule} from './modules/role/role.module';
import {LoggerModule} from './logger/logger.module';
import {AllExceptionFilter} from './common/filter/all-exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    RoleModule,
    LoggerModule,
  ],
  providers: [AllExceptionFilter],
})
export class AppModule {}
