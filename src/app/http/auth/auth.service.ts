import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static token: Token = null;

  constructor(private httpClient: HttpClient) {
    AuthService.token = JSON.parse(window.localStorage.getItem('user-token'));
  }

  public requestToken(): Observable<string> {
    return Observable.create(
      observer => {
        if (AuthService.token && Token.isValid(AuthService.token)) {
          observer.next(`${AuthService.token.tokenType} ${AuthService.token.hash}`);
          observer.complete();
        } else {
          const body: string = `grant_type=${environment.grant_type}&client_id=${environment.client_id}&client_secret=${environment.client_secret}&scope=${environment.scope}`;
          const options = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
          this.httpClient.post<any>(`${environment.api}/connect/token`, body, options)
            .subscribe(
              result => {
                if (result.access_token) {
                  const token: Token = new Token(
                    <string>result.access_token,
                    <number>(result.expires_in * 1000) + new Date().getTime(),
                    <string>result.token_type
                  );
                  AuthService.token = token;
                  window.localStorage.setItem('user-token', JSON.stringify(token));
                  observer.next(`${AuthService.token.tokenType} ${AuthService.token.hash}`);
                }
              },
              error => observer.error(error),
              () => observer.complete()
            );
        }
      }
    );
  }
}

class Token {

  constructor(public hash: string, public timeToRefresh: number, public tokenType: string) { }

  public static isValid(token: Token): boolean {
    console.log(token.timeToRefresh, new Date().getTime())
    return token.timeToRefresh > new Date().getTime();
  }
}