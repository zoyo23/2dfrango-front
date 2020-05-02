import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, LostPassComponent } from "./signin.index";



@NgModule({
  declarations: [LoginComponent, LostPassComponent],
  imports: [
    CommonModule
  ]
})
export class SigninModule { }
