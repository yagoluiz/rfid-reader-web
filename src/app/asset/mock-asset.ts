import { Injectable } from '@angular/core';

import { Asset } from './asset';

@Injectable()
export class AssetMock {
    asset: Asset;

    constructor() {
        let mock: Asset = 
        {
            itemName: 'Computer',
            localName: 'Garage',
            typeName: 'Eletronic',
            epc: 'ABCD0001'
        };

        this.asset = mock;
    }
}