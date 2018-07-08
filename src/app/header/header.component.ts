import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isUserLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
   
  }

  hideLoginIfUserIsvalid(){
    this.router.navigate(['./login']);
  }

}
