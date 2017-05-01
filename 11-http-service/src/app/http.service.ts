import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  //constructor() { }
   constructor(private http : Http) {}

   myData() {
    return 'This is my data, man!';
  }

   getInfo(){
   	return	this.http.get('src/data/info.json').map((response)=>response.json()).subscribe((data)=>console.log(data))
   }

}
