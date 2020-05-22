import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
    ) { }

  ngOnInit() {}

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 4000,
      color,
      cssClass: 'ion-text-center',
      position: 'middle'
    });
    toast.present();
  }

  async ionViewDidEnter() {
    await setTimeout(async () => {
      const authenticated = await this.authService.isAuthenticated();
      if (authenticated) {
        this.authService.setState('signedIn');
        this.router.navigateByUrl('/app');
      } else {
        this.presentToast('Could not sign you in. Please try again.', 'danger');
        this.router.navigateByUrl('/auth/sign-in');
      }
    }, 3000);
  }
}
