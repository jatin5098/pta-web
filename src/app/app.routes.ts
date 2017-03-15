import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const APP_ROUTES = [
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: 'app', component: AppComponent }
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);