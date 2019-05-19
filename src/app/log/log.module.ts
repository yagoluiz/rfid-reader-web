import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { LogMock } from './mock-log';
import { LogService } from './log.service';
import { LogComponent } from './log.component';

@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
    LogRoutingModule
  ],
  providers: [
    LogMock,
    LogService
  ]
})
export class LogModule { }
