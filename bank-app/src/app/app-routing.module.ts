import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
// import { UpdateAccountComponent } from './componenets/update-account/update-account.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
// import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
    {path: 'home', component: FrontComponent},
    {path: 'account', component: AccountComponent, canActivate: [AuthGuardGuard]},
    {path: 'transaction', component: TransactionComponent, canActivate: [AuthGuardGuard]},
    {path: 'user', component: UserComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: FrontComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

