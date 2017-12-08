import { LoginComponent } from './../../login';
import { Routes, RouterModule } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: { title: 'Magenic CTG - Login' } }
];
