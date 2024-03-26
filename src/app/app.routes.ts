import { Routes } from '@angular/router';
import { LoginComponent } from '@app/login/login.component';
import { SplashComponent } from '@app/splash/splash.component';

export const routes: Routes = [
    { path: ``, component: SplashComponent },
    { path: `login`, component: LoginComponent },
];
