import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, LostPassComponent } from "./signin.index";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent, LostPassComponent],
  imports: [
	CommonModule,
	MatButtonModule
  ]
})
export class SigninModule { }
