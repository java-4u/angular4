import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  condition = true;
  person = {
  	id	:	"1",
  	name:	"karthik",
  	age	:	"28",
  	active : false
  };

  persons = [
   {
  	id	:	"1",
  	name:	"karthik1",
  	age	:	"28",
  	active : true
  },
   {
  	id	:	"2",
  	name:	"karthik2",
  	age	:	"29",
  	active : false
  },
   {
  	id	:	"3",
  	name:	"karthik3",
  	age	:	"30",
  	active : true
  }


  ]
}
