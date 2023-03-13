import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el local

import  localEsEC  from "@angular/common/locales/es-EC";
import  localDe  from "@angular/common/locales/de";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localEsEC)
registerLocaleData(localDe)



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    SharedModule,
    AppRoutingModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-EC'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
