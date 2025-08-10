import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Inject, Injectable, LoggerService } from "@nestjs/common";
import { Request, Response } from "express";
import { ResponseDto } from "../dto/response.dto";
import { LOGGER_TOKEN } from "@src/logger/logger.module";

@Catch()
@Injectable()
export class AllExceptionFilter implements ExceptionFilter {

    constructor(@Inject(LOGGER_TOKEN) private readonly logger: LoggerService) { }

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>();

        let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal Server Error';
        let contextClassName = 'unknown';
        if (exception instanceof HttpException) {
            statusCode = exception.getStatus();

            const res = exception.getResponse();

            if (typeof res === 'string') {
                message = res;
            } else if (typeof res === 'object' && res !== null) {
                const r = res as any;
                message = r.message || message;
                contextClassName = r.context;
            }
        }

        // 如果是普通 Error 类型（如 throw new Error('xx')）
        else if (exception instanceof Error) {
            message = exception.message;
        }

        const logPayload = {
            timestamp: new Date().toISOString(),
            method: request.method,
            url: request.url,
            ip: request.ip,
            userAgent: request.headers['user-agent'],
            body: request.body,
            query: request.query,
            params: request.params,
            message,
            stack: exception instanceof Error ? exception.stack : '',
        };


        this.logger.error(JSON.stringify(logPayload), contextClassName);
        response.status(statusCode).json(new ResponseDto(null, message, statusCode))
    }

} 