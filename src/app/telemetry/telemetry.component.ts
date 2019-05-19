import { Component, OnInit } from '@angular/core';

import { TelemetryService } from './telemetry.service';
import { Telemetry } from './telemetry';

@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.component.html',
  styleUrls: ['./telemetry.component.scss']
})
export class TelemetryComponent implements OnInit {

  telemetriesMock: Telemetry[] = [];
  telemetries: Telemetry[] = [];

  constructor(private telemetryService: TelemetryService) { }

  ngOnInit() {
    this.addTelemetriesMock();
  }

  addTelemetries() : void {
    setInterval(() => {
      console.log('refresh');
      this.telemetryService.getTelemetries().subscribe(result => {
        this.telemetries = result;
      });
    }, 3000);
  }

  addTelemetriesMock() : void {
    setInterval(() => {
      console.log('refresh');
      this.telemetriesMock = this.telemetryService.getTelemetriesMock();
    }, 3000);
  }
}
