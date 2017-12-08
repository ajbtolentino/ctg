import { ProfileComponent } from './profile';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../common/auth.guard';
import { SecureComponent, SECURE_ROUTES } from './layout/secure';
import { PublicComponent, PUBLIC_ROUTES } from './layout/public';
/**
 * Route constant
 */
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: PublicComponent, data: { title: 'Magenic CTG' }, children: PUBLIC_ROUTES },
    { path: '', component: SecureComponent, canActivate: [AuthGuard], data: { title: 'Magenic CTG' }, children: SECURE_ROUTES },
    { path: '**', redirectTo: 'login' }
];

/**
 * App routing module
 */
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
