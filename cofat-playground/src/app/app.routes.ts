import { Routes } from '@angular/router';
import { Login } from './components/Auth/login/login';
import { Home } from './components/Home/home/home';
import { Signup } from './components/Auth/signup/signup';
import { AboutUs } from './components/Home/aboutus/aboutus';
import { Section } from './components/Home/section/section';
import { Contact } from './components/Home/contact/contact';

export const routes: Routes = [ 
    // {
    // path: '',
    // component: Home,
    // title: 'Home Page'
    // },

    {
        path: '',
        component: Home,
        children: [
            { path: '', component: Section }, 
            { path: 'aboutus', component: AboutUs },
            { path: 'contact', component: Contact }
        ],
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
    
    path: 'aboutus',
    component: AboutUs,
    title: 'aboutus Page'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
