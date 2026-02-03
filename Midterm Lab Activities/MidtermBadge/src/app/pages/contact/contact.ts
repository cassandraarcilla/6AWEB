import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h1>Contact Us</h1>

      <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
        <label for="name">Name:</label>
        <input id="name" name="name" [(ngModel)]="contact.name" required />

        <label for="email">Email:</label>
        <input id="email" type="email" name="email" [(ngModel)]="contact.email" required />

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" [(ngModel)]="contact.message" required></textarea>

        <button type="submit">Submit</button>
      </form>

      <div *ngIf="submitted" class="preview">
        <h2>Form Preview</h2>
        <p><strong>Name:</strong> {{ contact.name | uppercase }}</p>
        <p><strong>Email:</strong> {{ contact.email }}</p>
        <p><strong>Message:</strong> {{ contact.message }}</p>
      </div>
    </div>
  `,
  styles: [`
    /* Center container vertically and horizontally */
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: calc(100vh - 40px); /* full viewport minus some margin */
      padding: 20px;
      box-sizing: border-box;
    }

    h1 {
      text-align: center;
      margin-bottom: 24px;
    }

    form {
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      background-color: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
    }

    input, textarea {
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid #20c997;
      font-size: 16px;
      transition: border-color 0.2s ease;
    }

    input:focus, textarea:focus {
      border-color: #0d6efd;
      outline: none;
    }

    button {
      width: 150px;
      align-self: center;
      background-color: #20c997;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    button:hover {
      background-color: #0d6efd;
      transform: scale(1.05);
    }

    .preview {
      margin-top: 24px;
      background-color: white;
      padding: 16px 20px;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
      max-width: 500px;
      width: 100%;
    }

    .preview h2 {
      margin-top: 0;
      text-align: center;
    }

    label {
      font-weight: 600;
    }
  `]
})
export class ContactComponent {
  contact = { name: '', email: '', message: '' };
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
