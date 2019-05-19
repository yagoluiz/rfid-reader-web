import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetComponent } from './asset.component';

const routes: Routes = [
  {
    path: 'asset',    
    children: [
      {
        path: '',
        component: AssetComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
