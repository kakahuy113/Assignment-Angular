import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './components/home/home.component'
import {ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AskComponent } from './components/ask/ask.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { TestingComponent } from './components/testing/testing.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { SignInComponent } from './usercomponent/sign-in/sign-in.component';
import { SignUpComponent } from './usercomponent/sign-up/sign-up.component';
import { UserChangeComponent } from './usercomponent/user-change/user-change.component';
import { VerifyComponent } from './usercomponent/verify/verify.component';
import { ForgotPassComponent } from './usercomponent/forgot-pass/forgot-pass.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SecureInnerPages } from './shared/guard/secure-inner-pages.guard.ts.guard';
import { HintComponent } from './components/documentation/hint/hint.component';
import { PieComponent } from './components/pie/pie.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'home' , component : HomeComponent },
  { path : 'contact' , component : ContactComponent},
  { path : 'about' , component : AboutComponent },
  { path : 'ask' , component : AskComponent },
  { path : 'feedback' , component : FeedbackComponent },
  { path : 'exam/:id' , component : TestingComponent , canActivate : [AuthGuard]},
  { path : 'exam', component : CatalogueComponent , canActivate : [AuthGuard]},
  { path : 'login', component : SignInComponent , canActivate : [SecureInnerPages]},
  { path : 'register', component : SignUpComponent , canActivate : [SecureInnerPages]},
  { path : 'user' , component : UserChangeComponent , canActivate : [AuthGuard]},
  { path : 'verify-email' , component : VerifyComponent , canActivate : [SecureInnerPages] },
  { path : 'forgot-pass' , component : ForgotPassComponent , canActivate : [SecureInnerPages]},
  { path : 'document' , component : DocumentationComponent},
  { path : 'document/hint' , component : HintComponent},
  { path : 'exam/:id/result' , component : PieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
