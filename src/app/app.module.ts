import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './components/game/game.module';
import { LoginModule } from './components/login/login.module';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    LoginModule,
    GameModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
