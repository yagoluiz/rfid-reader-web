import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DefaultService } from '../http/default/default.service';
import { TelemetryMock } from './mock-telemetry';
import { Telemetry } from './telemetry';

@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  constructor(private defaultService: DefaultService, private telemetryMock: TelemetryMock) { }

  public getTelemetries(limit: number = 100) : Observable<Telemetry[]> {
    return this.defaultService.request<Telemetry[]>('get', `api/v1/telemetries/limit/${limit}`);
  }

  public getTelemetriesMock() : Telemetry[] {
    return this.telemetryMock.telemetries;
  }
}
