import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService : HttpService) {}
  info = {};
  someProperty:string = '';

  ngOnInit() {
  	console.log('LoginComponent-> init');

    console.log("Http Service Response");
    
    this.info  = this.httpService.getInfo();
    this.someProperty = this.httpService.myData();

  }

}
