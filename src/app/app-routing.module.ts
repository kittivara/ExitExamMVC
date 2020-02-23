import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  // {
  //   path: '',
  //   component: MainPageComponent,
  // },
  // {
  //   path: 'deposit',
  //   component: DepositComponent,
  // },
  // {
  //   path: 'withdraw',
  //   component: WithdrawComponent,
  // },
  // {
  //   path: 'transfer',
  //   component: TransferComponent,
  // },
  // {
  //   path: 'balance',
  //   component: BalanceComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
