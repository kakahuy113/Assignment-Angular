import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AskComponent } from './components/ask/ask.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PassChangeComponent } from './components/pass-change/pass-change.component';
import { UserChangeComponent } from './components/user-change/user-change.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { TestingComponent } from './components/testing/testing.component';
import { NavComponent } from './nav/nav.component';
import { DetailCatalogueComponent } from './components/detail-catalogue/detail-catalogue.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    AskComponent,
    SignInComponent,
    SignUpComponent,
    PassChangeComponent,
    UserChangeComponent,
    CatalogueComponent,
    TestingComponent,
    NavComponent,
    DetailCatalogueComponent,
    FooterComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
