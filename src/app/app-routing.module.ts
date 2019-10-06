import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { BalanceComponent } from './balance/balance.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'mainPage',
    component: MainPageComponent,
  },
  {
    path: 'deposit',
    component: DepositComponent,
  },
  {
    path: 'withdraw',
    component: WithdrawComponent,
  },
  {
    path: 'transfer',
    component: TransferComponent,
  },
  {
    path: 'balance',
    component: BalanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
