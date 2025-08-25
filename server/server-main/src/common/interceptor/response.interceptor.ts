import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from '@nestjs/common';
import {Observable, map} from 'rxjs';
import {ResponseDto} from '../dto/response.dto';


@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(
        map((data => {
          return new ResponseDto(data, 'success', 200);
        })),
      );
  }
}