import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      name : new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(5),
        Validators.pattern("[\\w\\-\\s\\/]+")
      ])),
      email : new FormControl('', this.customTextValidator)
    });
  } 

  // custom validator
  customTextValidator(control){
    if(control.value.length<3){
      return {'email':true};
    }
  }

  user = {};

  onSignUp = function(user){
    console.log(user);
    this.user = user;
    this.form.patchValue({name:''});
    this.form.patchValue({email:''});
  }
}
