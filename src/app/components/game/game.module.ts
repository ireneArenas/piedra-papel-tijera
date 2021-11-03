import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './game.routes';
import { GameComponent } from './game.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from '../menu/menu.component';
import { RankingComponent } from '../ranking/ranking.component';

@NgModule({
  declarations: [
    GameComponent,
    MenuComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  providers: []
})
export class GameModule { }
