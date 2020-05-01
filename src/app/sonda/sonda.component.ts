import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sonda',
  templateUrl: './sonda.component.html',
  styleUrls: ['./sonda.component.scss']
})
export class SondaComponent implements OnInit {

  sonda: any = "Consultando sonda...";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
	  this.getSonda().subscribe(response => {
		this.sonda = response;
	  }, error => {
		this.sonda = error.message;
	  })
  }
  getSonda() {
	return  this.http.get('https://2defrangoapi.azurewebsites.net/sonda');
  }

}
