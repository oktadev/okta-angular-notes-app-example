import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';

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

const oktaConfig = {
  issuer: 'https://{YourOktaDomain}/oauth2/default',
  redirectUri: window.location.origin + '/callback',
  clientId: '{ClientId}'
};

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
    OktaAuthModule,
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
