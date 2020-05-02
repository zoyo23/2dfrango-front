import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsComponent, JourneyComponent, SalesComponent } from "./game.index";



@NgModule({
	declarations: [AchievementsComponent, JourneyComponent, SalesComponent],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
