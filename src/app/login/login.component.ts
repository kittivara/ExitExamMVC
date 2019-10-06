import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  public validateAccount() {
    var result = true;
    return result;
  }
  onSubmit() {
    if (this.validateAccount()) {
      this.route.navigate(['mainPage']);
    }
  }
}
