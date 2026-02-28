import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

export class Register {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [DatePipe]
})
export class RegisterComponent extends Register {

  hidePassword = true;

  // Additional component state
  favoriteFrameworks: string[] = ['Angular', 'React', 'Vue'];
  selectedFrameworks: string[] = [];
  receiveUpdates = false;
  panelOpenState = false;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5)
  });

  constructor(private snackBar: MatSnackBar, private datePipe: DatePipe) {
    super();
  }

  onClickSubmit(data: {
    userName: string;
    email: string;
    password: string;
    gender: string;
    address: string;
    birthDate: Date;
    angularSkillLevel: number;
  }) {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.address = data.address;
    this.angularSkillLevel = data.angularSkillLevel;
    this.birthDate = data.birthDate;

    if (this.formdata.valid) {
      console.log('Form Submitted!', this.formdata.value);
      this.snackBar.open('Registration submitted successfully!', 'Close', {
        duration: 4000,
        panelClass: ['snack-success'],
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    } else {
      console.log('Form is not valid!');
      this.snackBar.open('Please fill in all required fields.', 'Dismiss', {
        duration: 4000,
        panelClass: ['snack-error'],
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    }
  }

  toggleFramework(fw: string) {
    const idx = this.selectedFrameworks.indexOf(fw);
    if (idx >= 0) this.selectedFrameworks.splice(idx, 1);
    else this.selectedFrameworks.push(fw);
  }

  isSelected(fw: string): boolean {
    return this.selectedFrameworks.includes(fw);
  }
}
