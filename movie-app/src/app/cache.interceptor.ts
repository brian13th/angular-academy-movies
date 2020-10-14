import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const headers = new HttpHeaders({'Authorization': 'thanasis'});
    // request = request.clone({
    //   setHeaders: {
    //     Authorization: 'Thanasis'
    //   }
    // });
    console.log('Entered intercept method of CacheInterceptor class')

    return next.handle(request).pipe(
      retry(5)
    );
  }
}
