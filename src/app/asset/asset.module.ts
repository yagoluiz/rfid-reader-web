import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { AssetComponent } from './asset.component';
import { AssetRoutingModule } from './asset-routing.module';
import { AssetMock } from './mock-asset';
import { AssetService } from './asset.service';

@NgModule({
  declarations: [AssetComponent],
  imports: [
    CommonModule,
    AssetRoutingModule
  ],
  providers: [
    AssetMock,
    AssetService
  ]
})
export class AssetModule { }
