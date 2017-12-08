import { ProfileComponent } from './../../profile';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';

export const SECURE_ROUTES: Routes = [
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: { title: 'Magenic CTG - Profile' } },
];
