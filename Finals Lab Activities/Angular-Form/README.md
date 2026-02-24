# Template-Driven Form — Angular

An Angular 17 application demonstrating a **Template-Driven Form** with two-way data binding, built-in validators, and a custom color palette.

## 🎨 Color Palette

| Token | Hex | Use |
|-------|-----|-----|
| Peach | `#F8B195` | Accents, badge, headers |
| Coral | `#F67280` | Submit button, error states |
| Mauve | `#C06C84` | Button gradient, section accents |
| Purple | `#6C5B7B` | Gradient endpoint |
| Deep Blue | `#355C7D` | Background, card surface |

## 📁 Project Structure

```
src/
├── index.html
├── main.ts
├── styles.css                          ← Global styles + CSS variables
└── app/
    ├── app.component.ts                ← Root component
    ├── app.component.html
    ├── app.component.css
    ├── app.config.ts                   ← App providers
    ├── app.routes.ts                   ← Routes (template-demo)
    └── template-demo/
        ├── template-demo.component.ts  ← Component class + model
        ├── template-demo.component.html← ngForm, ngModel, validators
        └── template-demo.component.css ← Scoped palette styles
```

## 📋 Form Fields

### Original Fields
- **Username** — text, `required`
- **Email** — email, `required`, `email` validator
- **Password** — password, `required`, `minlength="6"`
- **Role** — select (Admin / User / Guest), `required`

### Additional Fields (3 Added)
- **Gender** — radio buttons (Male / Female / Non-binary / Prefer not to say), `required`
- **Employment Status** — select (Permanent / Probationary), `required`
- **Comments / Notes** — textarea (optional)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Serve locally
ng serve

# Build for production
ng build
```

## 🌐 Deploy to Netlify

```bash
# Build the project
ng build

# Then drag the dist/template-driven/browser folder to Netlify,
# or connect your GitHub repo and set:
#   Build command: ng build
#   Publish directory: dist/template-driven/browser
```
