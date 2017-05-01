import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  //constructor() { }
  //constructor(private commonService : CommonService) {}
  constructor(private httpService : HttpService) {}
  
  angular4Obj = {};

  ngOnInit() {
  	console.log('RegisterComponent-> init')
  	//console.log(this.commonService.angular4Obj);
  	//console.log(this.commonService.success());
  	//console.log(this.commonService.error());
  	//this.angular4Obj = this.commonService.angular4Obj;

  	//updating commonservice data
  	//this.commonService.angular4Obj.version = '4.x';
  }

}
