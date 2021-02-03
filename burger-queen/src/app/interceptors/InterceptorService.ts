import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let reqClone = req;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    const token = sessionStorage.getItem("token");
    if( token != null){
      reqClone = req.clone({
        headers
      });
  }

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse){
    console.log('Sucedió un error');
    console.log('Registrando en el log file');
    console.warn(error);
    return throwError('Error personalizado');
  }
}
