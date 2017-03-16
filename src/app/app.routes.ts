import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PaDashboardComponent } from './pa-dashboard/pa-dashboard.component';


const APP_ROUTES = [
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'pa-dashboard', component: PaDashboardComponent }
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);