import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routes';
import { AppRouterComponent } from './app.router.component';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PaDashboardComponent } from './pa-dashboard/pa-dashboard.component';
import { TaDashboardComponent } from './ta-dashboard/ta-dashboard.component';
import { DataGridComponent } from './common/data-grid/data-grid.component';
import { TenantEntryComponent } from './tenant/tenant-entry/tenant-entry.component';
import { TenantListComponent } from './tenant/tenant-list/tenant-list.component';

@NgModule({
  declarations: [
    AppRouterComponent,
    AppComponent,
    AuthenticationComponent,
    PaDashboardComponent,
    TaDashboardComponent,
    DataGridComponent,
    TenantEntryComponent,
    TenantListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppRouterComponent]
})
export class AppModule { }
