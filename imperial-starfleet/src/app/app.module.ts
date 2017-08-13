import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DeathSquareModule } from './death-square/death-square.module'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { InfoWindowComponent } from './info-window/info-window.component';
import { InfoWindowService } from './info-window/info-window.service'

@NgModule({
  declarations: [
    AppComponent,
    TieFighterComponent,
    InfoWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DeathSquareModule,
    AppRoutingModule
  ],
  providers: [InfoWindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
