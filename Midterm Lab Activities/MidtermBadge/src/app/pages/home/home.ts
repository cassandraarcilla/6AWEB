import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, TruncatePipe],
  template: `
    <div class="container">
      <h1>Welcome!</h1>
      <h2>Latest Updates</h2>

      <ul>
        <li *ngFor="let post of latestPosts$ | async">
          <h3>{{ post.title | uppercase }}</h3>
          <p>{{ post.body | truncate:80 }}</p>
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
      min-height: calc(100vh - 40px);
      background-color: #e0f7f7;
      box-sizing: border-box;
    }

    h1 {
      color: #04395e;
      margin-bottom: 12px;
      text-align: center;
    }

    h2 {
      color: #0d6efd;
      margin-bottom: 24px;
      text-align: center;
    }

    ul {
      list-style: none;
      padding-left: 0;
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    li {
      background-color: white;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
    }

    h3 {
      margin: 0 0 8px 0;
      color: #20c997;
    }

    p {
      margin: 0;
      color: #04395e;
      line-height: 1.5;
    }
  `]
})
export class HomeComponent {
  private data = inject(DataService);

  latestPosts$ = this.data.posts$.pipe(
    map(posts => posts.slice(0, 5))
  );
}
