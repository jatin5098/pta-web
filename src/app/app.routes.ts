import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PaDashboardComponent } from './pa-dashboard/pa-dashboard.component';
import { TenantListComponent } from './tenant/tenant-list/tenant-list.component';
import { TenantEntryComponent } from './tenant/tenant-entry/tenant-entry.component';



const APP_ROUTES = [
    {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full'
    },
    {
        path: 'app',
        component: AppComponent
    },
    {
        path: 'pa-dashboard',
        component: PaDashboardComponent,
        children: [
            { path: '', redirectTo: 'lists', pathMatch: 'full' },
            { path: 'lists', component: TenantListComponent },
            { path: 'tenant-entry', component: TenantEntryComponent }
        ]
    }
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);