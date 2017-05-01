import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }


  angular4Obj = {
	 version:'4',
	 technology:'Angular 4 JS'
  }

  success() {
  	return "Success";
  }

	error() {
  	return "Error";
  }


}
