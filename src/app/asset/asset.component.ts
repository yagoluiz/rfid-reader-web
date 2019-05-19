import { Component, OnInit } from '@angular/core';

import { Asset } from './asset';
import { AssetService } from './asset.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  assetsMock: Asset[] = [];
  assets: Asset[] = [];

  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.addAssetReadMock();
  }

  addAssetRead(): void {
    setInterval(() => {
      console.log('refresh');
      this.assetService.getAssetRead().subscribe(result => {
        this.assets.push(result);
      });
    }, 3000);
  }

  addAssetReadMock(): void {
    setInterval(() => {
      console.log('refresh');
      const asset = this.assetService.getAssetReadMock();
      this.assetsMock.push(asset);
    }, 3000);
  }
}
