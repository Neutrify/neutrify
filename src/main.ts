import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import awsconfig from './aws-exports';
import Amplify from 'aws-amplify';
import '@angular/compiler';

// Choose an OAuth config based on environment
if (awsconfig.oauth.redirectSignIn.includes(',')) {
  const filterHost = url => new URL(url).host === window.location.host;
  awsconfig.oauth.redirectSignIn = awsconfig.oauth.redirectSignIn
    .split(',')
    .filter(filterHost)
    .shift();
  awsconfig.oauth.redirectSignOut = awsconfig.oauth.redirectSignOut
    .split(',')
    .filter(filterHost)
    .shift();
}

Amplify.configure(awsconfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
