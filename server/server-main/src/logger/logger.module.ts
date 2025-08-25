import {Global, Module} from '@nestjs/common';
import {WinstonModule, WINSTON_MODULE_NEST_PROVIDER} from 'nest-winston';
import {winstonConfig} from './logger.config';


export const LOGGER_TOKEN = WINSTON_MODULE_NEST_PROVIDER;

@Global()
@Module({
  imports: [WinstonModule.forRoot(winstonConfig)],
})
export class LoggerModule { }