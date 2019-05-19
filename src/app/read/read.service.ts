import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DefaultService } from '../http/default/default.service';
import { ReadMock } from './mock-read';
import { Read } from './read';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private defaultService: DefaultService, private readMock: ReadMock) { }

  public getReads(limit: number = 100) : Observable<Read[]> {
    return this.defaultService.request<Read[]>('get', `api/v1/reads/limit/${limit}`);
  }

  public getReadsMock() : Read[] {
    return this.readMock.reads;
  }
}
