import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, tap } from 'rxjs/operators';
import { DbService } from './services/db.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private actorCache: DbService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('hello from intercaptor')
    const cachedResponse = this.actorCache.getActorService(req);
    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.actorCache);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    actorCache: DbService): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.actorCache.put(req, event);
        }
      })
    );
  }
}
