import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameHomeComponent, AchievementsComponent, JourneyComponent, SalesComponent } from "./game.index";



@NgModule({
	declarations: [AchievementsComponent, JourneyComponent, SalesComponent, GameHomeComponent],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
