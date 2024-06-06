import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule,MatInputModule,MatFormFieldModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form:FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router){
    if(authService.isLoggedIn()){
      this.router.navigate(['/'])
    }
    this.form=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  hide = true;
  clickEvent(event: MouseEvent) {
    event.preventDefault();
    this.hide = !this.hide;
    event.stopPropagation();
  }
  submit(){
    if(this.form.valid){
      const {username,password}=this.form.value;
      this.authService.login(username,password);
      this.router.navigate(['/'])
    }
  }
}
