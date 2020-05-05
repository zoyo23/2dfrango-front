import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  constructor(private http: HttpClient) { }
	user: any;
	pontuacao: any = {
		moedas: 0,
		diamantes: 0
	}
	ngOnInit(): void {
		this.obterUsuario();
		if(this.user) {
			this.obterPontuacao(this.user.email).subscribe((response:any) => {
				if(response) {
					this.pontuacao.moedas = response.moedas;
					this.pontuacao.diamantes = response.diamantes;
				}
			});
		}
	}

	obterUsuario() {
		let user = sessionStorage.getItem('user')
		this.user = (user ? JSON.parse(user) : null);
	}

	obterPontuacao(email:string) {
		return this.http.get('https://2defrangoapi.azurewebsites.net/Informacoes/obterPontuacao?email=' + email)
	}

}
