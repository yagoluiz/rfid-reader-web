import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public request<T>(method: string, path: string, data?: any): Observable<T> {

    method = method.toLowerCase();
    if (['get', 'head', 'post', 'put', 'delete', 'connect', 'options', 'trace', 'patch'].indexOf(method)) {
      return throwError(`${method} invalid!`);
    }
    return Observable.create(
      observer => {
        let _token: string = null;
        this.authService.requestToken()
          .subscribe(
            result => {
              console.log('result');
              _token = result;
            }, error => console.log('error', error),
            () => {
              console.log('complete')
              const options: any = {
                body: data,
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': _token
                }
              }
              return this.http.request<any>(method, `${environment.api}/${path}`, options)
                .pipe(
                  catchError((httpErrorResponse: HttpErrorResponse) => {
                    observer.error(httpErrorResponse.error);
                    return this.handleError(httpErrorResponse);
                  })
                ).subscribe(
                  result => observer.next(result),
                  _ => { },
                  () => observer.complete()
                )
            }
          );
      }
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`${error.url} -> ${error.status} - ${error.statusText}`);
  }
}