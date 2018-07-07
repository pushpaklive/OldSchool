import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUserData =  {};
  //will provide user name and password on submit click and using ngModel to bind to this 
  //registeredData's name and password that we will create
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  
  registerNewUser(){
    this.auth.registerNewUser(this.registeredUserData)
         .subscribe(res => console.log(res) , err => console.log(err));
  }

}
