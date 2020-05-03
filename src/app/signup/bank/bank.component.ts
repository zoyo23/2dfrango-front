import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  myWindow: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  connectToBank(event: Event){
    this.myWindow = window.open("https://localhost:32778/?clientId=123", "", "toolbar=no,scrollbars=no,resizable=no,width=400,height=600");
    this.myWindow.onunload=function(){
      alert("Janela fechada");
    };
  }

}
