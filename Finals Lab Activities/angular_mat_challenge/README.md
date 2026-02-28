# angular_mat_challenge

**NexaConf 2025 — Angular Material Reactive Form**
A tech conference registration form built as the Angular Material Challenge.

---

## 🚀 Features

- **Event**: NexaConf 2025 Tech Conference Registration
- **Dark / Light Mode Toggle** — MatSlideToggle in toolbar switches full theme
- **Password Validation**: alphanumeric only, starts with a letter, min 8 characters
- **Birth Date Validation**: Only users born in 2006 or earlier are accepted
- **All required Angular Material components** including MatSlider, MatChips, MatSelect, MatDatepicker, MatExpansionPanel, MatProgressBar, MatSnackBar, MatBadge, MatTooltip

---

## 📦 Setup

```bash
npm install
ng serve
# Open http://localhost:4200
```

---

## 🌐 Deploy to Netlify

1. Push this repo to GitHub (name it `angular_mat_challenge`)
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Connect your GitHub account and select `angular_mat_challenge`
4. Netlify auto-detects `netlify.toml` — build settings are pre-configured:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/angular-mat-challenge`
5. Click **Deploy site**

> The `netlify.toml` file at the root handles all routing for the Angular SPA.

---

## 🔺 Deploy to Vercel (alternative)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import `angular_mat_challenge`
3. Set:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/angular-mat-challenge`
4. Click **Deploy**

> The `vercel.json` file handles SPA routing fallbacks.

---

## ✅ Validation Rules

| Field | Rule |
|---|---|
| Password | Alphanumeric only (`[a-zA-Z0-9]`), must start with a letter, min 8 chars |
| Birth Date | Year must be **2006 or earlier** (max date = Dec 31, 2006) |
| Email | Standard email format |
| Gender | Required |
| Track | Required |
| Terms & CoC | Both checkboxes required |

---

## 🎨 Angular Material Components Used

| Component | Usage |
|---|---|
| MatToolbar | Top navigation bar |
| MatSlideToggle | **Dark/Light mode switch** in toolbar |
| MatFormField + MatInput | All text input fields (outline appearance) |
| MatDatepicker | Date of Birth |
| MatSelect | Conference Track, T-Shirt Size |
| MatRadioGroup | Gender selection |
| MatSlider | Years of Experience |
| MatChips | Tech Tags selection |
| MatExpansionPanel | Password requirements accordion |
| MatCheckbox | Terms & Code of Conduct |
| MatProgressBar | Submission progress |
| MatButton | Submit, icon buttons |
| MatIcon | Prefix icons on every field |
| MatBadge | Notification count on toolbar |
| MatTooltip | Hover tips on buttons |
| MatSnackBar | Success/error toasts |
| MatCard | Info card, confirmation card |
| MatDivider | Section separators |
