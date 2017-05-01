import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App works!';
  example = 'Form Example'
  user = {};
  onSignUp = function(user){
    console.log(user);
    this.user = user;
  }
}
