import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth:AuthService, private router:Router){}

  userName='';
  userPass='';
  errorMsg1='';
  errorMsg2='';

  login(){
    if(!this.userName){
      console.log('required');
      this.errorMsg1 = 'User Name is Required'
    }
    else if(!this.userPass){
      console.log('required');
      this.errorMsg2 = 'Password is Required'
    }
    else {
      this.errorMsg1 = '';
    this.errorMsg2 = '';
    let result = this.auth.login(this.userName,this.userPass);
    if(result === 200){
      this.router.navigate(['home']);
    }
    if(result === 403){
      this.errorMsg1 = 'Enter Valid User Name'
      this.errorMsg2 = 'Enter Valid Password'
    }

    }
  }

}
