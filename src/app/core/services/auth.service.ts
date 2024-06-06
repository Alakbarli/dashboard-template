import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthToken(){
    return localStorage.getItem('authToken');
  }
  login(username:string,password:string){
    localStorage.setItem("authToken","token");
  }
  logout(){
    localStorage.removeItem("authToken");
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
