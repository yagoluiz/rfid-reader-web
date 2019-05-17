import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelemetryComponent } from './telemetry.component';
import { TelemetryRoutingModule } from './telemetry-routing.module';
import { TelemetryMock } from './mock-telemetry';
import { TelemetryService } from './telemetry.service';

@NgModule({
  declarations: [TelemetryComponent],
  imports: [
    CommonModule,
    TelemetryRoutingModule
  ],
  providers: [
    TelemetryMock,
    TelemetryService
  ]
})
export class TelemetryModule { }
