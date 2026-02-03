import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="brand">Community Help Desk</div>
      <div class="nav-links">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/services" routerLinkActive="active">Services</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </div>
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {}
