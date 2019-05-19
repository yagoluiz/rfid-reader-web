import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogModule } from './log/log.module';
import { TelemetryModule } from './telemetry/telemetry.module';
import { ReadModule } from './read/read.module';
import { AssetModule } from './asset/asset.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LogModule,
    TelemetryModule,
    ReadModule,
    AssetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
