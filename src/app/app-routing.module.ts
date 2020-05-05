import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SondaComponent } from "./sonda/sonda.component";
import { LoginComponent, LostPassComponent } from "./signin/signin.index";
import { AccountComponent, BankComponent, GoldComponent, PassComponent } from "./signup/signup.index";
import { AchievementsComponent, JourneyComponent, SalesComponent, GameHomeComponent } from './game/game.index';


const routes: Routes = [
	{ path: 'sonda', component: SondaComponent },
	{ path: '', component: LoginComponent },
	{ path: 'home', component: GameHomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'lost-pass', component: LostPassComponent },
	{ path: 'register', component: AccountComponent },
	{ path: 'bank', component: BankComponent },
	{ path: 'gold', component: GoldComponent },
	{ path: 'pass', component: PassComponent },
	{ path: 'game', component: JourneyComponent },
	{ path: 'achievements', component: AchievementsComponent },
	{ path: 'sales', component: SalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
