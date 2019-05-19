import { Read } from './read';

export class ReadMock {
    reads: Read[] = [];

    constructor() {
        let mocks: Read[] = [
            {
                ip: '10.0.75.1',
                epc: 'ABCD0001',
                readDate: new Date().getTime().toString(),
                antenna: 1
            },
            {
                ip: '10.0.75.1',
                epc: 'ABCD0002',
                readDate: new Date().getTime().toString(),
                antenna: 2
            },
            {
                ip: '10.0.75.1',
                epc: 'ABCD0003',
                readDate: new Date().getTime().toString(),
                antenna: 3
            }
        ];

        mocks.forEach((mock: Read) => {
            this.reads.push(mock);
        });
    }
}