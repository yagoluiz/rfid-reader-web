import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DefaultService } from '../http/default/default.service';
import { TelemetryMock } from './mock-telemetry';
import { Telemetry } from './telemetry';

@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  constructor(private telemetryMock: TelemetryMock) { }

  public getTelemetriesMock() : Telemetry[] {
    return this.telemetryMock.telemetries;
  }
}
