import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextSecComponent } from './text-sec/text-sec.component';
import { FormSecComponent } from './form-sec/form-sec.component';

@NgModule({
  declarations: [
    AppComponent,
    TextSecComponent,
    FormSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
