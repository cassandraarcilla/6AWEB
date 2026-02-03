import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>{{ 'About This Portal' | uppercase }}</h1>

      <div class="card">
        <p>
          The Community Help Desk Portal is a multi-page Angular SPA
          demonstrating routing, shared services, observables, and pipes.
        </p>

        <p>
          Current Date: {{ today | date:'fullDate' }}
        </p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 20px;
      min-height: calc(100vh - 40px);
      background-color: #e0f7f7;
      box-sizing: border-box;
    }

    h1 {
      color: #04395e;
      text-align: center;
      margin-bottom: 24px;
    }

    .card {
      background-color: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
      max-width: 600px;
      width: 100%;
      color: #04395e;
      line-height: 1.6;
    }
  `]
})
export class AboutComponent {
  today = new Date();
}
