import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelemetryComponent } from './telemetry.component';

const routes: Routes = [
  {
    path: 'telemetry',    
    children: [
      {
        path: '',
        component: TelemetryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelemetryRoutingModule { }
