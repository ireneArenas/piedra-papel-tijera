import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),  
    pathMatch: 'full'
  },
  { 
    path: 'gamess', 
    loadChildren: () => import('./components/game/game.module').then(m => m.GameModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
