import { Component, OnInit } from '@angular/core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginI } from '../../models/login.model';
import { Router } from '@angular/router';
import { LoginResponseI } from '../../models/login-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  faUser = faUser;
  faLock= faLock;
  tokenParam!: string;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: ApiService, private router: Router) {
    
    }

  errorStatus: boolean = false;
  errorMessage: any = "";

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(sessionStorage.getItem('token')){
      this.router.navigate(['home-waiter']);
    }
  }

  onLogin(form: LoginI): void{
    this.api.onLogin(form).subscribe(data => {
      let dataResponse: LoginResponseI = data;
      if(dataResponse.token != '') {
        sessionStorage.setItem("token", dataResponse.token!);
        sessionStorage.setItem("email", dataResponse.email!);
        this.router.navigate(['home-waiter']);
      }
    }, () => {
      alert("Usuario o passaword incorrectos")
    });
    // console.log(form);
  }
}