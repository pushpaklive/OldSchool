import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  isUserloggedIn: boolean = false;

  constructor(private auth: AuthService,
              private router: Router
             ) { }

  ngOnInit() {    
  }
 
  validateUser(){    
      this.auth.validateUser(this.loginUserData)
          .subscribe((res) => {
           console.log(res);
           this.router.navigate(['./photos']);
          }, (err) => {
            this.router.navigate(['./error']);
          });         
  }

}
