import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: SocialUser;

  constructor(private authService: AuthService, private http: HttpClient, private route: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (this.user != null) {
		  this.http.get("https://2defrangoapi.azurewebsites.net/Autenticacao/verificaLogin", {
          headers: new HttpHeaders({
            'Authorization': this.user.idToken
          })
        })
          .subscribe((data: any) => {
            console.dir("Resposta da API");
            console.dir(data);
          });
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(()=>{
		this.route.navigate(['home']);
	});
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
