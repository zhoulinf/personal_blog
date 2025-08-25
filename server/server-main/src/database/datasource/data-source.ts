import {ConfigService} from '@nestjs/config';
import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';
import {join} from 'path';


export const createAppDataSourceConfig = (configService: ConfigService): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    entities: [join(__dirname, '../../**/*.entity{.ts,.js}')],
    synchronize: false,
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
    host: configService.get<string>('db.host'),
    port: configService.get<number>('db.port'),
    username: configService.get<string>('db.username'),
    password: configService.get('db.password'),
    database: configService.get('db.database'),
  };
};