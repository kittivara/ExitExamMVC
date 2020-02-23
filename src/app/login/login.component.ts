import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
//import { AccountService } from "src/account.service";
import { StudentIDData } from "../model/studentIDData";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = new FormControl("");
  password = new FormControl();
  // data: StudentIDData[];
  isValidate = false;
  studentIDData;
  account;
  count = 0;
  //countLogin = [false, false, false, false, false, false, false, false];
  countLogin = new Array<number>(8);
  studentList: Array<StudentIDData> = [];
  errorMsg = true;
  warningMsg = true;
  //countLogin = [0, 0, 0, 0, 0, 0, 0, 0];
  constructor(private route: Router) {
    this.countLogin = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  ngOnInit() {
    this.studentIDData = [
      {
        no: 0,
        id: 59050900,
        password: 1872
        //countLogin: 0,
      },
      {
        no: 1,
        id: 59050911,
        password: 8899
        //countLogin: 0,
      },
      {
        no: 2,
        id: 59050922,
        password: 6914
        //countLogin: 0,
      },
      {
        no: 3,
        id: 59050933,
        password: 1121
        //countLogin: 0,
      },
      // {
      //   id: 59050944,
      //   password: 0985,
      // },
      {
        no: 4,
        id: 59050955,
        password: 1111
        //countLogin: 0,
      },
      {
        no: 5,
        id: 59050966,
        password: 6453
        //countLogin: 0,
      },
      {
        no: 6,
        id: 59050977,
        password: 4117
        //countLogin: 0,
      },
      {
        no: 7,
        id: 59050988,
        password: 7000
        //countLogin: 0,
      },
      {
        no: 8,
        id: 59050999,
        password: 8143
        //countLogin: 0,
      }
    ];
  }
  // studentCreate(username, password) {
  //   let customObj = new StudentIDData();
  //   customObj.id = username;
  //   customObj.password = password;
  //   this.studentList.push(customObj);
  // }

  validateAccount() {
    console.log(this.username.value);
    console.log(this.countLogin + "valid");
    this.studentIDData.map(res => {
      if (
        this.username.value == res.id &&
        this.password.value == res.password &&
        this.countLogin[res.no] == 0
      ) {
        this.isValidate = true;
      }
      //else {
      //   this.isValidate = false;
      // }
    });

    return this.isValidate;
  }
  onSubmit() {
    if (this.validateAccount()) {
      console.log(this.validateAccount());
      this.studentIDData.map(res => {
        if (
          this.username.value == res.id &&
          this.password.value == res.password &&
          this.countLogin[res.no] == 0
        ) {
          this.countLogin[res.no] += 1;
          console.log(this.countLogin);
          this.count++;
          this.warningMsg = true;
        } else if (this.countLogin[res.no] == 1) {
          this.warningMsg = false;
        }
      });
      console.log(this.username.value, this.password.value);
      //console.log(this.studentList);

      this.errorMsg = true;
      //this.warningMsg = true;
    } else {
      this.errorMsg = false;
    }
  }
}
