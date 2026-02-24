import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.component.html',
  styleUrl: './reactive-demo.component.css'
})
export class ReactiveDemoComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  // Dropdown options
  roles     = ['Admin', 'User', 'Guest'];
  genders   = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];
  statuses  = ['Permanent', 'Probationary'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      // ── Original fields ──
      username: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]
      ],
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)
        ]
      ],
      role: ['', Validators.required],

      // ── Additional fields ──
      gender:   ['', Validators.required],
      status:   ['', Validators.required],
      comments: [''],
    });
  }

  /** Helper: check if a field is touched AND invalid */
  isInvalid(name: string): boolean {
    const ctrl = this.form.get(name);
    return !!(ctrl && ctrl.touched && ctrl.invalid);
  }

  /** Helper: check if a field is touched AND valid */
  isValid(name: string): boolean {
    const ctrl = this.form.get(name);
    return !!(ctrl && ctrl.touched && ctrl.valid);
  }

  /** Helper: access specific error */
  hasError(name: string, error: string): boolean {
    const ctrl = this.form.get(name);
    return !!(ctrl && ctrl.touched && ctrl.hasError(error));
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('Form value:', this.form.value);
    this.submitted = true;
  }

  reset(): void {
    this.form.reset();
    this.submitted = false;
  }
}
