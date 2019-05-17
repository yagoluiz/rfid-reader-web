import { Component, OnInit } from '@angular/core';

import { TelemetryService } from './telemetry.service';
import { Telemetry } from './telemetry';

@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.component.html',
  styleUrls: ['./telemetry.component.scss']
})
export class TelemetryComponent implements OnInit {

  telemetries: Telemetry[];

  constructor(private telemetryService: TelemetryService) { }

  ngOnInit() {
    this.telemetries = this.telemetryService.getTelemetriesMock();
  }
}
