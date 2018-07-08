import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
   
  isUserLoggedOut: boolean = false;

  myImagesObj: any = [
    { "id":"1", "url": "../../assets/images//gps1.jpg" },
    { "id":"2", "url": "../../assets/images//gps1.jpg" },
    { "id":"3", "url": "../../assets/images//gps1.jpg" },
    { "id":"4", "url": "../../assets/images//gps1.jpg" },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.isUserLoggedOut = true;
    this.router.navigate(['./login']);
  }

}
