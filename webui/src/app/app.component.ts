import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;

  constructor(private router: Router,
    private authService: AuthenticationService) { 
      this.authService.currentUser.subscribe(user=>{
        this.currentUser=user;
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
