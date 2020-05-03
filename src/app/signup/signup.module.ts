import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent, BankComponent, GoldComponent, PassComponent } from "./signup.index";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
	declarations: [AccountComponent, BankComponent, GoldComponent, PassComponent],
  imports: [
	CommonModule,
	MatFormFieldModule,	
	MatInputModule,
    MatButtonModule,
  ]
})
export class SignupModule { }
