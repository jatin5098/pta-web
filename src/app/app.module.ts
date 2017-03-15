import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routes';
import { AppRouterComponent } from './app.router.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRouterComponent
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
