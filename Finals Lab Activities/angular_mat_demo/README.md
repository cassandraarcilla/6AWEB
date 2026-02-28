# Angular Material Hands-on Demo

A complete registration form built with Angular Material components, featuring a blue-green-white color theme.

## Getting Started

### Prerequisites
- Node.js v18+
- npm v9+
- Angular CLI v17

### Installation

```bash
# Install dependencies
npm install

# Run the development server
ng serve

# Navigate to
http://localhost:4200
```

## Features

### Angular Material Components Used

#### Core Form Components (from the lab)
- **MatFormField** — Outline appearance form fields
- **MatInput** — Text, email, password, textarea inputs
- **MatSelect** — Dropdown for gender selection
- **MatDatepicker** — Date of birth picker with min/max validation
- **MatCheckbox** — Terms & conditions agreement
- **MatRadioButton** — Plan selection (Free / Pro / Enterprise)
- **MatButton** — Raised and text buttons
- **MatIcon** — Material icons throughout
- **MatCard** — Container cards for each step
- **MatToolbar** — Top navigation bar

#### Additional Components (3+ new additions)
1. **MatStepper** — Multi-step registration wizard (4 steps)
2. **MatChips / MatChipListbox** — Interest selection chips
3. **MatSlideToggle** — Newsletter and notification toggles
4. **MatExpansionPanel** — Password tips accordion & learning objectives
5. **MatProgressSpinner** — Loading indicator during form submission
6. **MatSnackBar** — Success/error toast notifications
7. **MatBadge** — Notification count on toolbar icon
8. **MatTooltip** — Hover tooltips on password toggle
9. **MatDivider** — Section separators

## Color Theme: Blue-Green-White

| Token | Color | Use |
|-------|-------|-----|
| Primary | `#006064` (Teal Dark) | Headings, stepper, buttons |
| Accent | `#00897b` (Green Teal) | Chips, toggles, icons |
| Background | `#e0f7fa` (Light Cyan) | Page background |
| Surface | `#ffffff` | Cards |

## Form Validation

- **Required fields**: firstName, lastName, email, birthDate, gender, address, password, confirmPassword, agreeToTerms
- **Email validation**: Built-in Angular Validators.email
- **Min length**: password (8 chars), names (2 chars)
- **Custom validator**: Passwords must match (cross-field validation)
- **Date constraints**: birthDate must be between 1900 and today

## Project Structure

```
src/
├── app/
│   ├── app.module.ts        ← All Material module imports
│   ├── app.component.ts     ← Root with toolbar + badge
│   └── register/
│       ├── register.component.ts    ← Form logic
│       ├── register.component.html  ← Template with all components
│       └── register.component.scss  ← Blue-green-white styles
├── styles.scss              ← Global theme styles
└── index.html
```
