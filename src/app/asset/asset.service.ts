import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DefaultService } from '../http/default/default.service';
import { AssetMock } from './mock-asset';
import { Asset } from './asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private defaultService: DefaultService, private assetMock: AssetMock) { }

  public getAssetRead() : Observable<Asset> {
    return this.defaultService.request<Asset>('get', 'api/v1/assets/read')
  }

  public getAssetReadMock() : Asset {
    return this.assetMock.asset;
  }
}
