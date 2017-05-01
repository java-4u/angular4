import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App works!';
  example = 'Button Click Example'
  newTechnology = "";
  technologys = ["Java","Angular JS"];

  addTechnology = function(){
  //console.log(this.newTechnology!="");
  	if(this.newTechnology!="") {
  		this.technologys.push(this.newTechnology);
  		this.newTechnology = "";
  	}  	
  }

  removeTechnology = function(index){
 	this.technologys.splice(index,1);
  }
}
