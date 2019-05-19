import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadRoutingModule } from './read-routing.module';
import { ReadMock } from './mock-read';
import { ReadService } from './read.service';
import { ReadComponent } from './read.component';

@NgModule({
  declarations: [ReadComponent],
  imports: [
    CommonModule,
    ReadRoutingModule
  ],
  providers: [
    ReadMock,
    ReadService
  ]
})
export class ReadModule { }
