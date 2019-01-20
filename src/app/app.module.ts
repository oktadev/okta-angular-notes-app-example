import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { OktaAuthModule } from '@okta/okta-angular';

import { MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatInputModule,
         MatFormFieldModule,
         MatButtonModule,
         MatListModule,
         MatDividerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    AppRoutingModule,
    OktaAuthModule.initAuth({
      issuer: 'https://{YourOktaDomain}/oauth2/default',
      redirectUri: 'http://localhost:4200/implicit/callback',
      clientId: '{ClientId}'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
