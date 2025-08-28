# 🧭 Angular Routing Beginner Guide for COFAT Intern

> **Angular 20 Routing Implementation** - Step-by-Step Guide

---

## 🎯 What We're Building

### Current Structure (What you have now):
```
app.component.html:
├── <app-navbar></app-navbar>
├── <app-hero-section></app-hero-section>
└── <app-footer></app-footer>
```

### Target Structure (What we want to achieve):
```
app.component.html:
└── <router-outlet></router-outlet>

Routes:
├── /home (HomeComponent)
│   ├── <app-navbar></app-navbar>
│   ├── <router-outlet></router-outlet> (shows hero/about/contact)
│   └── <app-footer></app-footer>
├── /login (LoginComponent - full screen)
└── /signup (SignupComponent - full screen)
```

---

## 📋 Step-by-Step Implementation

### **Step 1: Create the Home Component**

First, let's create a Home component that will contain our navbar, router-outlet, and footer:

```bash
ng generate component components/home
```

### **Step 2: Create Page Components**

Create the components that will be displayed inside the home layout:

```bash
ng generate component pages/about
ng generate component pages/contact
```

### **Step 3: Update Project Structure**

Your project structure should now look like this:

```
src/app/
├── components/
│   ├── navbar/
│   ├── hero-section/
│   ├── footer/
│   └── home/              ← New
├── pages/
│   ├── about/             ← New
│   └── contact/           ← New
├── auth/
│   ├── login/
│   └── signup/
├── app-routing.module.ts
├── app.component.html
├── app.component.ts
└── app.module.ts
```

---

## 🔧 Code Implementation

### **File 1: app-routing.module.ts**

This is where we define all our routes:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all components
import { HomeComponent } from './components/home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  // Main application routes
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HeroSectionComponent },        // Default route (hero section)
      { path: 'about', component: AboutComponent },         // /about route
      { path: 'contact', component: ContactComponent }      // /contact route
    ]
  },
  
  // Authentication routes (full screen, no navbar/footer)
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  
  // Fallback route
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### **File 2: app.component.html**

This becomes very simple - just one router-outlet:

```html
<!-- This is the main router outlet for the entire app -->
<router-outlet></router-outlet>
```

### **File 3: components/home/home.component.html**

This contains the layout with navbar, nested router-outlet, and footer:

```html
<!-- Navigation bar (always visible on home routes) -->
<app-navbar></app-navbar>

<!-- This router-outlet shows different pages (hero, about, contact) -->
<router-outlet></router-outlet>

<!-- Footer (always visible on home routes) -->
<app-footer></app-footer>
```

### **File 4: components/home/home.component.ts**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // This component acts as a layout wrapper
}
```

### **File 5: components/navbar/navbar.component.html**

Update navbar with navigation links:

```html
<nav class="navbar">
  <div class="navbar-brand">
    <img src="assets/cofat-logo.png" alt="COFAT" class="logo">
  </div>
  
  <div class="navbar-menu">
    <!-- Navigation links using routerLink -->
    <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
      Accueil
    </a>
    <a routerLink="/about" routerLinkActive="active">
      À Propos
    </a>
    <a routerLink="/contact" routerLinkActive="active">
      Contact
    </a>
    
    <!-- Login button navigates to login route -->
    <button (click)="navigateToLogin()" class="login-btn">
      Connexion
    </button>
  </div>
</nav>
```

### **File 6: components/navbar/navbar.component.ts**

Add navigation functionality:

```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
```

### **File 7: auth/login/login.component.html**

Full-screen login component:

```html
<div class="login-container">
  <div class="login-card">
    <h2>Connexion COFAT</h2>
    
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" formControlName="email" class="form-control">
      </div>
      
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" formControlName="password" class="form-control">
      </div>
      
      <button type="submit" class="btn btn-primary">Se connecter</button>
    </form>
    
    <!-- Navigation to signup -->
    <div class="auth-links">
      <p>Pas de compte? 
        <a (click)="goToSignup()" class="signup-link">Créer un compte</a>
      </p>
      
      <!-- Back to home -->
      <p>
        <a (click)="goToHome()" class="home-link">← Retour à l'accueil</a>
      </p>
    </div>
  </div>
</div>
```

### **File 8: auth/login/login.component.ts**

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
      // Here you would call your authentication service
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
```

### **File 9: auth/signup/signup.component.html**

```html
<div class="signup-container">
  <div class="signup-card">
    <h2>Créer un compte COFAT</h2>
    
    <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Nom complet</label>
        <input type="text" id="name" formControlName="name" class="form-control">
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" formControlName="email" class="form-control">
      </div>
      
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" formControlName="password" class="form-control">
      </div>
      
      <button type="submit" class="btn btn-primary">Créer le compte</button>
    </form>
    
    <!-- Navigation options -->
    <div class="auth-links">
      <p>Déjà un compte? 
        <a (click)="goToLogin()" class="login-link">Se connecter</a>
      </p>
      
      <p>
        <a (click)="goToHome()" class="home-link">← Retour à l'accueil</a>
      </p>
    </div>
  </div>
</div>
```

### **File 10: auth/signup/signup.component.ts**

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup data:', this.signupForm.value);
      // Here you would call your registration service
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
```

---

## 📦 Required Imports and Module Setup

### **File: app.module.ts**

Make sure all components are imported and declared:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FooterComponent } from './components/footer/footer.component';

// Page components
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

// Auth components
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroSectionComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  // Required for forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

## 🧭 Understanding Routing Concepts

### **1. Router Outlet**
- `<router-outlet></router-outlet>` is where Angular displays the component based on the current route
- You can have multiple router outlets (main app outlet and nested outlets)

### **2. Children Routes**
```typescript
{
  path: '',
  component: HomeComponent,
  children: [                              // These are children routes
    { path: '', component: HeroSectionComponent },     // Nested inside HomeComponent
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
  ]
}
```

### **3. Route Navigation**
- **Declarative**: `<a routerLink="/about">About</a>`
- **Programmatic**: `this.router.navigate(['/login'])`

### **4. Route Structure in Our App**

```
/ (HomeComponent)
├── / (default) → HeroSectionComponent
├── /about → AboutComponent  
└── /contact → ContactComponent

/login (LoginComponent - full screen)
/signup (SignupComponent - full screen)
```

---

## 🎯 Navigation Flow

### **User Journey:**

1. **Start**: User visits `/` → sees Home with Hero Section
2. **Navigation**: User clicks "About" in navbar → sees Home with About component
3. **Login**: User clicks "Login" button → full screen login (no navbar/footer)
4. **Signup**: From login, user clicks "Create account" → full screen signup
5. **Return**: From auth pages, user can return to home

### **Route Changes:**
- `/` → HomeComponent with HeroSectionComponent inside
- `/about` → HomeComponent with AboutComponent inside  
- `/contact` → HomeComponent with ContactComponent inside
- `/login` → LoginComponent (full screen)
- `/signup` → SignupComponent (full screen)

---

## ✅ Testing Your Implementation

### **1. Start the Development Server**
```bash
ng serve
```

### **2. Test These URLs:**
- `http://localhost:4200/` → Home with hero section
- `http://localhost:4200/about` → Home with about page
- `http://localhost:4200/contact` → Home with contact page
- `http://localhost:4200/login` → Login page (full screen)
- `http://localhost:4200/signup` → Signup page (full screen)

### **3. Test Navigation:**
- Click navbar links → should change content inside home layout
- Click login button → should go to full screen login
- From login, click "Create account" → should go to signup
- From signup, click "Se connecter" → should go back to login
- From auth pages, click "Retour à l'accueil" → should go to home

---

## 🚨 Common Issues and Solutions

### **Issue 1: "Cannot match any routes"**
**Solution**: Check that all components are imported in `app.module.ts` and routes are correctly defined.

### **Issue 2: "Router outlet not found"**  
**Solution**: Make sure `AppRoutingModule` is imported in `app.module.ts`.

### **Issue 3: "Navigation not working"**
**Solution**: Check that `Router` is imported in component and injected in constructor.

### **Issue 4: "routerLink not working"**
**Solution**: Ensure `RouterModule` is imported (it comes with `AppRoutingModule`).

---

## 🎨 CSS for Full Screen Auth Components

### **auth/login/login.component.scss**

```scss
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  padding: 20px;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;

  h2 {
    color: #0066cc;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 700;
  }
}

.form-group {
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    color: #2c3e50;
    font-weight: 600;
  }

  .form-control {
    width: 100%;
    padding: 12px;
    border: 2px solid #dee2e6;
    border-radius: 6px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #0066cc;
    }
  }
}

.btn {
  width: 100%;
  padding: 12px;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #004499;
  }
}

.auth-links {
  text-align: center;
  margin-top: 20px;

  a {
    color: #0066cc;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  .home-link {
    color: #6c757d;
    font-size: 14px;
  }
}
```

---

## 📝 Next Steps

After implementing this routing structure:

1. **Test all navigation paths**
2. **Add loading states** for route transitions
3. **Implement route guards** for protected routes (Week 3)
4. **Add animations** for smooth transitions
5. **Connect forms to backend API** (Week 3)

---

**📅 Created**: August 27, 2025  
**👨‍💼 Mentor**: Mohamed Amine  
**🏢 Company**: COFAT  
**🎯 Focus**: Angular 20 Routing Implementation  
**📋 Difficulty**: Beginner-Friendly

---

_Master Angular routing step by step! 🧭_
