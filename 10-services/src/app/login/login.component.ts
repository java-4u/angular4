import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor() { }

  constructor(private commonService : CommonService) {}
  angular4Obj = {};

  ngOnInit() {
  	console.log('LoginComponent-> init')
  	console.log(this.commonService.angular4Obj);
  	console.log(this.commonService.success());
  	console.log(this.commonService.error());
  	this.angular4Obj = this.commonService.angular4Obj;
  	
  }

}
