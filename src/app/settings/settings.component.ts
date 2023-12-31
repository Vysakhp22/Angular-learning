import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  public logOut(): void {
    this.authService.loggedOut();
    this.router.navigateByUrl('/login');
  }

}
