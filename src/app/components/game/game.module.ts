import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './game.routes';
/*import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';*/
import { GameComponent } from './game.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  declarations: [
    GameComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    /*MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,*/
    FontAwesomeModule
  ],
  providers: []
})
export class GameModule { }
