import { Injectable } from '@angular/core';

import { Telemetry } from './telemetry';

@Injectable()
export class TelemetryMock {
    telemetries: Telemetry[] = [];

    constructor() {
        let mocks: Telemetry[] = [
            {
                ip: '10.0.75.1',
                temperature: 45,
                isConnection: true
            },
            {
                ip: '10.0.75.1',
                temperature: 32,
                isConnection: true
            },
            {
                ip: '10.0.75.1',
                temperature: 40,
                isConnection: false
            },
        ];

        mocks.forEach((mock: Telemetry) => {
            this.telemetries.push(mock);
        });
    }
}