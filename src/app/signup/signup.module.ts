import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent, BankComponent, GoldComponent, PassComponent } from "./signup.index";



@NgModule({
	declarations: [AccountComponent, BankComponent, GoldComponent, PassComponent],
  imports: [
    CommonModule
  ]
})
export class SignupModule { }
