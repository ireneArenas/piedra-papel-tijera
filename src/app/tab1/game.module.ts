import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './game.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './game.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from '../components/menu/menu.component';


@NgModule({
  declarations: [
    GameComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: []
})
export class GameModule { }
