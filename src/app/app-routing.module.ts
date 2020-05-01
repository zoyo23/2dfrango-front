import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SondaComponent } from "./sonda/sonda.component";


const routes: Routes = [
	{ path: 'sonda', component: SondaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
