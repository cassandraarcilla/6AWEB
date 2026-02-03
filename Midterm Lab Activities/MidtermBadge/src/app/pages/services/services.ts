import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-services',
  imports: [CommonModule, FormsModule, TruncatePipe],
  template: `
    <div class="container">
      <h1>Services</h1>

      <input
        type="text"
        placeholder="Search by title or body..."
        [(ngModel)]="search"
        (ngModelChange)="search$.next($event)"
      />

      <ul>
        <li *ngFor="let post of filteredPosts$ | async">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body | truncate:120 }}</p>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      min-height: calc(100vh - 40px);
      background-color: #e0f7f7;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
      color: #04395e;
    }

    input {
      width: 100%;
      max-width: 600px;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid #20c997;
      font-size: 16px;
      margin-bottom: 20px;
      transition: border-color 0.2s ease;
    }

    input:focus {
      border-color: #0d6efd;
      outline: none;
    }

    ul {
      list-style: none;
      padding-left: 0;
      width: 100%;
      max-width: 600px;
    }

    li {
      background-color: white;
      padding: 16px 20px;
      margin-bottom: 12px;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
    }

    h3 {
      margin: 0 0 8px 0;
      color: #0d6efd;
    }

    p {
      margin: 0;
      color: #04395e;
    }
  `]
})
export class ServicesComponent {
  private data = inject(DataService);

  search = '';
  search$ = new BehaviorSubject<string>('');

  filteredPosts$ = combineLatest([this.data.posts$, this.search$]).pipe(
    map(([posts, search]) =>
      posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
      )
    )
  );
}
