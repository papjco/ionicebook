import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'front',
    loadChildren: () => import('./front/front.module').then(m => m.FrontModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'chapter/:id',
    loadChildren: () => import('./view-chapter/view-chapter.module').then( m => m.ViewchapterPageModule)
  },
  {
    path: '',
    redirectTo: 'front',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
