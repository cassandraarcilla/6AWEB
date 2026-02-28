import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl, FormBuilder, FormGroup,
  ValidationErrors, ValidatorFn, Validators
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

// ── Custom Validators ─────────────────────────────────────────────────────────

/** Password: alphanumeric only, min 8 chars, must start with a letter */
const passwordValidator: ValidatorFn = (ctrl: AbstractControl): ValidationErrors | null => {
  const val: string = ctrl.value || '';
  if (!val) return null;
  if (!/^[a-zA-Z]/.test(val))      return { startsWithLetter: true };
  if (!/^[a-zA-Z0-9]+$/.test(val)) return { alphanumericOnly: true };
  if (val.length < 8)               return { minlength: { requiredLength: 8, actualLength: val.length } };
  return null;
};

/** Birth date: user must have been born in 2006 or earlier */
const birthYearValidator: ValidatorFn = (ctrl: AbstractControl): ValidationErrors | null => {
  if (!ctrl.value) return null;
  const year = new Date(ctrl.value).getFullYear();
  if (year > 2006) return { tooYoung: true };
  return null;
};

/** Passwords match */
const passwordsMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const pw  = group.get('password')?.value;
  const cpw = group.get('confirmPassword')?.value;
  return pw && cpw && pw !== cpw ? { passwordsMismatch: true } : null;
};

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() themeChange = new EventEmitter<boolean>();

  isDark = false;
  hidePassword    = true;
  hideConfirm     = true;
  submitted       = false;
  isSubmitting    = false;
  submitProgress  = 0;

  // Max birth date: Dec 31 2006
  readonly maxBirthDate = new Date(2006, 11, 31);
  readonly minBirthDate = new Date(1900, 0, 1);

  readonly trackOptions = [
    { value: 'main',       label: 'Main Stage',       icon: 'stadium'        },
    { value: 'indie',      label: 'Indie Stage',      icon: 'music_note'     },
    { value: 'hiphop',     label: 'Hip-Hop Stage',    icon: 'headphones'     },
    { value: 'electronic', label: 'Electronic Stage', icon: 'graphic_eq'     },
    { value: 'acoustic',   label: 'Acoustic Lounge',  icon: 'piano'          },
    { value: 'rnb',        label: 'R&B Stage',        icon: 'queue_music'    },
  ];

  readonly shirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  readonly techTags = ['OPM', 'Pop', 'Hip-Hop', 'R&B', 'Rock', 'Electronic', 'Indie', 'Jazz'];
  selectedTags: string[] = [];

  form!: FormGroup;

  // Submitted data snapshot
  snap: any = null;

  constructor(private fb: FormBuilder, private snack: MatSnackBar) {}

  ngOnInit() {
    this.form = this.fb.group({
      // Personal
      firstName:    ['', [Validators.required, Validators.minLength(2)]],
      lastName:     ['', [Validators.required, Validators.minLength(2)]],
      email:        ['', [Validators.required, Validators.email]],
      phone:        ['', [Validators.pattern(/^[0-9+\-\s()]{7,15}$/)]],
      birthDate:    [null, [Validators.required, birthYearValidator]],
      gender:       ['', Validators.required],
      institution:  ['', Validators.required],
      // Account
      username:     ['', [Validators.required, Validators.minLength(3)]],
      password:     ['', [Validators.required, passwordValidator]],
      confirmPassword: ['', Validators.required],
      // Event
      track:        ['', Validators.required],
      shirtSize:    ['', Validators.required],
      dietaryNeeds: [''],
      experience:   [3],
      // Consent
      agreeTerms:   [false, Validators.requiredTrue],
      codeOfConduct:[false, Validators.requiredTrue],
    }, { validators: passwordsMatchValidator });
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.themeChange.emit(this.isDark);
  }

  toggleTag(tag: string) {
    const i = this.selectedTags.indexOf(tag);
    if (i >= 0) this.selectedTags.splice(i, 1);
    else        this.selectedTags.push(tag);
  }

  isTagSelected(tag: string) { return this.selectedTags.includes(tag); }

  getPasswordError(): string {
    const c = this.form.get('password');
    if (!c?.errors) return '';
    if (c.errors['required'])          return 'Password is required.';
    if (c.errors['startsWithLetter'])  return 'Password must start with a letter.';
    if (c.errors['alphanumericOnly'])  return 'Only letters and numbers are allowed (no special characters).';
    if (c.errors['minlength'])         return 'Password must be at least 8 characters long.';
    return 'Invalid password.';
  }

  getBirthDateError(): string {
    const c = this.form.get('birthDate');
    if (!c?.errors) return '';
    if (c.errors['required'])  return 'Date of birth is required.';
    if (c.errors['tooYoung'])  return 'Participants must have been born in 2006 or earlier.';
    return 'Invalid date.';
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.snack.open('⚠️ Please fix all errors before submitting.', 'OK', {
        duration: 4000,
        panelClass: ['snack-error'],
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      return;
    }

    this.isSubmitting = true;
    this.submitProgress = 0;

    const interval = setInterval(() => {
      this.submitProgress += 8;
      if (this.submitProgress >= 100) {
        clearInterval(interval);
        this.isSubmitting  = false;
        this.submitted     = true;
        this.snap = { ...this.form.value, techTags: [...this.selectedTags] };
        this.snack.open(`🎉 Welcome, ${this.form.value.firstName}! You're registered for SoundWave Fest 2025!`, 'Close', {
          duration: 6000,
          panelClass: ['snack-success'],
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    }, 100);
  }

  get f() { return this.form.controls; }
}
