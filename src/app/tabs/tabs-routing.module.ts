import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../tab1/game.module').then(m => m.GameModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/ranking.module').then(m => m.RankingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
