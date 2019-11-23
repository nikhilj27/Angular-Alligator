import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpInterceptorService } from './Services/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarService } from './Services/snackbar.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AuthModule, BrowserAnimationsModule, MatSnackBarModule],
  providers: [
    SnackbarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
