import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatToolbarModule }        from '@angular/material/toolbar';
import { MatCardModule }           from '@angular/material/card';
import { MatFormFieldModule }      from '@angular/material/form-field';
import { MatInputModule }          from '@angular/material/input';
import { MatButtonModule }         from '@angular/material/button';
import { MatIconModule }           from '@angular/material/icon';
import { MatSelectModule }         from '@angular/material/select';
import { MatDatepickerModule }     from '@angular/material/datepicker';
import { MatNativeDateModule }     from '@angular/material/core';
import { MatCheckboxModule }       from '@angular/material/checkbox';
import { MatRadioModule }          from '@angular/material/radio';
import { MatSliderModule }         from '@angular/material/slider';
import { MatSnackBarModule }       from '@angular/material/snack-bar';
import { MatProgressBarModule }    from '@angular/material/progress-bar';
import { MatProgressSpinnerModule }from '@angular/material/progress-spinner';
import { MatStepperModule }        from '@angular/material/stepper';
import { MatChipsModule }          from '@angular/material/chips';
import { MatSlideToggleModule }    from '@angular/material/slide-toggle';
import { MatExpansionModule }      from '@angular/material/expansion';
import { MatTooltipModule }        from '@angular/material/tooltip';
import { MatDividerModule }        from '@angular/material/divider';
import { MatBadgeModule }          from '@angular/material/badge';

import { AppComponent }      from './app.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDividerModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
