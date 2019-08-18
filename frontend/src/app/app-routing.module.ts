import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'mixer',
    loadChildren: () => import('./mixer/mixer.module').then(mod => mod.MixerModule),
  },
  {
    path: '',
    redirectTo: '/mixer',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/mixer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
