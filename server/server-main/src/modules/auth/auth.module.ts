import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UserModule} from '../user/user.module';
import {JwtModule} from '@nestjs/jwt';
import {jwtConstants} from './constants';
import {JwtAuthGuard} from './auth.guard';
import {JwtStrategy} from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '10s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard, JwtStrategy],
})
export class AuthModule { }
