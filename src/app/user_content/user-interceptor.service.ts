import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  
  @Injectable({
    providedIn: 'root',
})

export class UserInterceptorService implements HttpInterceptor {
intercept(
    req: HttpRequest<any>,
    next: HttpHandler
): Observable<HttpEvent<any>> {
    const clone = req.clone({
    setHeaders: {
        'user-request': 'bautista.pietraroia',
    },
});
    return next.handle(clone);
    }
  
}