import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedMaterialModule } from './shared-material.module';
import { HttpClientModule } from '@angular/common/http';
import { IframeBotComponent } from './cb.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, IframeBotComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
