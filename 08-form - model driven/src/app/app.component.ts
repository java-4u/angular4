import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App works!';
  example = 'Model Driven Form Example'
  form;
  ngOnInit()  {
    this.form = new FormGroup({
      name : new FormControl(),
      email : new FormControl()
    });
  } 

  user = {};

  onSignUp = function(user){
    console.log(user);
    this.user = user;
    this.form.patchValue({name:''});
    this.form.patchValue({email:''});
  }
}
