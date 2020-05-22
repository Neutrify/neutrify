import { TermsConditionsComponent } from './home/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { CtaComponent } from './home/cta/cta.component';
import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage, children: [
    { path: '', redirectTo: '/home/welcome', pathMatch: 'full' },
    { path: 'welcome', component: CtaComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'terms-conditions', component: TermsConditionsComponent}
  ], canActivate: [AuthGuardService]},
  { path: 'app', loadChildren: () => import('./news-feed/news-feed.module')
  .then(m => m.NewsFeedPageModule), canActivate: [AuthGuardService] },
  { path: 'auth', loadChildren: () => import('./auth/auth-page.module').then(m => m.AuthPageModule), canActivate: [AuthGuardService] },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
