import { Routes } from '@angular/router';
import { SignIn } from '../Authentication/sign-in/sign-in';
import { Home } from '../Dashboard/home/home';
import { ForgotPassword } from '../Authentication/forgot-password/forgot-password';
import { SignUp } from '../Authentication/sign-up/sign-up';
import { Dashboard } from '../Dashboard/dashboard/dashboard';
import { myGuardGuard } from './my-guard-guard';

export const routes: Routes = [
    {
        path:'dashboard',component: Dashboard,
        canActivate: [myGuardGuard],
        children:[
            {path:'', redirectTo: 'Home', pathMatch: 'full' },
            {path:'Home', component: Home}
        ]
    },
        {path:'Forgot-password', component: ForgotPassword},
        {path:'Sign-up', component: SignUp},

    {path:'Sign-in', component: SignIn},
    {path: '', redirectTo: 'Sign-in', pathMatch: 'full' },
    {path: '**', redirectTo: 'Sign-in' , pathMatch: 'full' }

];
