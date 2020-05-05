import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  constructor(private http: HttpClient) { }

	pontuacao: any = {
		moedas: 0,
		diamantes: 0
	}
	ngOnInit(): void {
		this.obterPontuacao().subscribe((response:any) => {
			this.pontuacao.moedas = response.moedas;
			this.pontuacao.diamantes = response.diamantes;
		})
	}

	obterPontuacao() {
		return this.http.get('https://2defrangoapi.azurewebsites.net/Informacoes/obterPontuacao?email=lucas@gmail.com')
	}

}
