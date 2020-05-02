import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SondaComponent } from './sonda/sonda.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninModule } from "./signin/signin.module";
import { SignupModule } from "./signup/signup.module";
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent,
    SondaComponent
],
imports: [
	BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	BrowserAnimationsModule,
	SigninModule,
	SignupModule,
	GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
