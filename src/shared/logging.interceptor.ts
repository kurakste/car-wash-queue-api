import { Injectable, NestInterceptor, ExecutionContext, Logger, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    const now = Date.now();
    console.log('1------------->', now);
    return next.handle()
      .pipe(
        tap(() =>
        {
        console.log('2---------------->', Date.now());
        Logger.log(
            `${method} : ${url} ${Date.now() - now} ms`,
            context.getClass().name,
          )}
        ),
      );
  }
}
