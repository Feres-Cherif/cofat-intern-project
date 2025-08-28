import { Routes } from '@angular/router';
import { Login } from './components/Auth/login/login';
import { Home } from './components/Home/home/home';
import { Signup } from './components/Auth/signup/signup';

export const routes: Routes = [ 
    {
    path: '',
    component: Home,
    title: 'Home Page'
  },
    {
    path: 'login',
    component: Login,
    title: 'Login Page'
    },
    {
    path: 'signup',
    component: Signup,
    title: 'sign Page'
  },
    {
        path: '**',
        redirectTo: ''
    }
];
