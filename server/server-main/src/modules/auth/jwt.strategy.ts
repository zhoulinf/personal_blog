import { Inject, Injectable, LoggerService, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';
import { LOGGER_TOKEN } from '@src/logger/logger.module';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  @Inject(LOGGER_TOKEN)
  private readonly logger: LoggerService

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  validate(payload: any) {
    console.log("进来了")
    this.logger.log(`${JSON.stringify(payload)}`, JwtStrategy.name)
    if (!payload || !payload.sub || !payload.username) {
      throw new UnauthorizedException('Invalid token or token expired');
    }
    return { userId: payload.sub, username: payload.username };
  }
}
