import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(uName:string, uPass:string){
    if(uName === 'nag' && uPass === '123'){
      return 200;
    }
    else{
      return 403;
    }
  }

  logout(){
    return 201;
  }
}
