import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuardService]},
  { path: 'app', canActivate: [AuthGuardService], children: [
    { path: '', loadChildren: () => import('./news-feed/news-feed.module').then(m => m.NewsFeedPageModule)},
    { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule),
      canActivate: [AuthGuardService]}
  ]},
  { path: 'auth', loadChildren: () => import('./auth/auth-page.module').then(m => m.AuthPageModule) },

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
