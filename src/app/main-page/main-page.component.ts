import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
  goToDeposit() {
    this.route.navigate(['deposit']);
  }
  goToWithdraw() {
    this.route.navigate(['withdraw']);
  }
  goToTransfer() {
    this.route.navigate(['transfer']);
  }
  goToBalance() {
    this.route.navigate(['balance']);
  }
}
