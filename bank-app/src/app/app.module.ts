import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { FrontComponent } from './pages/front/front.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { UserComponent } from './pages/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TransactionDisplayComponent } from './components/transaction-display/transaction-display.component';
import { AddFundComponent } from './components/add-fund/add-fund.component';
import { SubtractFundComponent } from './components/subtract-fund/subtract-fund.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { NavbarLogoComponent } from './components/navbar-logo/navbar-logo.component';
import { BankLogoComponent } from './components/bank-logo/bank-logo.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    LoginComponent,
    AccountComponent,
    TransactionComponent,
    UserComponent,
    NavbarComponent,
    LoginFormComponent,
    UserFormComponent,
    TransactionDisplayComponent,
    AddFundComponent,
    SubtractFundComponent,
    TransferFundComponent,
    CreateUserComponent,
    NavbarLogoComponent,
    BankLogoComponent,
    AdvertisementComponent,
    SlideShowComponent,
    CreateAccountComponent,
    DeleteAccountComponent,
    // UpdateAccountComponent,
    UpdateUserComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
