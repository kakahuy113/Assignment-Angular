import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AskComponent } from './components/ask/ask.component';
import { SignInComponent } from './usercomponent/sign-in/sign-in.component';
import { SignUpComponent } from './usercomponent/sign-up/sign-up.component';

import { UserChangeComponent } from './usercomponent/user-change/user-change.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { TestingComponent } from './components/testing/testing.component';
import { NavComponent } from './nav/nav.component';
import { DetailCatalogueComponent } from './components/detail-catalogue/detail-catalogue.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountdownModule } from 'ngx-countdown';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/Authentication/auth.service'
import { VerifyComponent } from './usercomponent/verify/verify.component';
import { ForgotPassComponent } from './usercomponent/forgot-pass/forgot-pass.component';
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
    UserChangeComponent,
    CatalogueComponent,
    TestingComponent,
    NavComponent,
    DetailCatalogueComponent,
    FooterComponent,
    VerifyComponent,
    ForgotPassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CountdownModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
