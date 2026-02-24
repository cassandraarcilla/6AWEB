import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export class TemplateDemo {
  title    = 'Template Driven Demo';
  username = '';
  email    = '';
  password = '';
  role     = '';
  gender   = '';
  status   = '';
  comments = '';
  submitted = false;
}

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.component.html',
  styleUrl: './template-demo.component.css'
})
export class TemplateDemoComponent extends TemplateDemo {

  onSubmit(): void {
    this.submitted = true;
  }

  reset(): void {
    this.username  = '';
    this.email     = '';
    this.password  = '';
    this.role      = '';
    this.gender    = '';
    this.status    = '';
    this.comments  = '';
    this.submitted = false;
  }
}
