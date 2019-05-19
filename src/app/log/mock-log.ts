import { Injectable } from '@angular/core';

import { Log } from './log';

@Injectable()
export class LogMock {
    logs: Log[] = [];

    constructor() {
        let mocks: Log[] = [
            {
                ip: '10.0.75.1',
                exception: 'Exception 001',
                stackTrace: 'Stack 001',
                exceptionDate: new Date().getTime().toString()
            },
            {
                ip: '10.0.75.1',
                exception: 'Exception 002',
                stackTrace: 'Stack 002',
                exceptionDate: new Date().getTime().toString()
            },
            {
                ip: '10.0.75.1',
                exception: 'Exception 003',
                stackTrace: 'Stack 003',
                exceptionDate: new Date().getTime().toString()
            }
        ];

        mocks.forEach((mock: Log) => {
            this.logs.push(mock);
        });
    }
}