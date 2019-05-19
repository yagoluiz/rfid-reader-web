import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DefaultService } from '../http/default/default.service';
import { LogMock } from './mock-log';
import { Log } from './log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private defaultService: DefaultService, private logMock: LogMock) { }

  public getLogs(limit: number = 100) : Observable<Log[]> {
    return this.defaultService.request<Log[]>('get', `api/v1/logs/limit/${limit}`);
  }

  public getLogsMock() : Log[] {
    return this.logMock.logs;
  }
}
