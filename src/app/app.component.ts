import { environment } from './../environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';
import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';
import { AdMob } from '@admob-plus/ionic';

// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  menuSubscription$: Subscription;
  menuStatus = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private menuService: MenuService,
    public authService: AuthService,
    public router: Router,
    private admob: AdMob
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.gaTrackingId, { page_path: event.urlAfterRedirects });
      }
    });

    this.menuSubscription$ = this.menuService.getMenuStatus().subscribe(status => {
      this.menuStatus = status;
    });

    this.initializeApp();
  }

  ionViewWillLeave() {
    this.menuSubscription$.unsubscribe();
  }

  mainMenuOpen() {
    this.menu.swipeGesture(true, 'mainMenu');
  }

  filterMenuOpen() {
    if (!this.menuStatus) {
      this.menu.swipeGesture(true, 'filterMenu');
    }
  }

  mainMenuClosed() {
    this.menu.swipeGesture(false, 'mainMenu');
  }

  filterMenuClosed() {
    if (!this.menuStatus) {
      this.menu.swipeGesture(false, 'filterMenu');
    }
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  initializeApp() {
    this.platform.ready().then((readySource) => {
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString('#333');
        this.statusBar.styleLightContent();
      } else if (this.platform.is('ios')) {
        this.statusBar.styleDefault();
      }

      if (readySource !== 'dom') {
        if (!environment.production) {
          this.admob.setDevMode(true);
        }
        this.admob.setAppVolume(0);
      }

      this.splashScreen.hide();
    });
  }
}
