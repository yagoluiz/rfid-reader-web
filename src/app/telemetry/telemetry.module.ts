import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelemetryComponent } from './telemetry.component';
import { TelemetryRoutingModule } from './telemetry-routing.module';

@NgModule({
  declarations: [TelemetryComponent],
  imports: [
    CommonModule,
    TelemetryRoutingModule
  ]
})
export class TelemetryModule { }
