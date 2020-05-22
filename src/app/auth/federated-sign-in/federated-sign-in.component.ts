import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-federated-sign-in',
  templateUrl: './federated-sign-in.component.html',
  styleUrls: ['./federated-sign-in.component.scss'],
})
export class FederatedSignInComponent implements OnInit {
  public loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  async federatedSignIn(provider: string) {
    this.loading = true;
    const res = await this.authService.federatedSignIn(provider);
  }
}
