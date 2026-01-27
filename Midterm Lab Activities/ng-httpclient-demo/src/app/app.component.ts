import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './httpclient.service';
import { User } from './user.model';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-httpclient-demo';

  httpusers: User[] = [];
  recipes: Recipe[] = [];

  constructor(private httpClient: HttpClientService) {}

  ngOnInit(): void {
    this.httpClient.getUsersRemotely().subscribe({
      next: (data) => this.httpusers = data.slice(0, 5),
      error: (err) => console.error('Error fetching users:', err)
    });

    this.httpClient.getRecipesRemotely().subscribe({
      next: (data) => this.recipes = data.slice(0, 5),
      error: (err) => console.error('Error fetching recipes:', err)
    });
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
