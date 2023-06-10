import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './component/tabs/tabs.page';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./component/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path:'',
    component: TabsPage,
    children:[{
      
        path: 'history',
        loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
  ]
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
