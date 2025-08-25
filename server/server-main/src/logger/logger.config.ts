/* eslint-disable @typescript-eslint/restrict-template-expressions */
// src/common/logger/winston.config.ts
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as path from 'path';

const logDir = path.join(__dirname, '../../logs');

// 创建自定义的 printf 格式
const customFormat = winston.format.printf(({ timestamp, level, message, context }) => {
  console.log(message)
  const msg = typeof message === 'string' ? message : JSON.stringify(message);
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  return `${timestamp} [${level}]${context ? ` [${context}]` : ''}: ${msg}`;
});


export const winstonConfig = {
  transports: [
    // 控制台输出
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        customFormat,
      ),
    }),
    // 每天一个error日志文件
    new DailyRotateFile({
      dirname: path.join(logDir, 'error'),
      filename: '%DATE%-error.log',
      datePattern: 'YYYY-MM-DD',
      level: 'error',
      zippedArchive: true,    // 是否压缩归档
      maxSize: '20m',         // 单个文件最大20MB
      maxFiles: '14d',        // 保留14天
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
    // 每天一个all日志文件
    new DailyRotateFile({
      dirname: path.join(logDir, 'combined'),
      filename: '%DATE%-combined.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
  ],
};
