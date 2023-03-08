import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isConnected : boolean = false;

  constructor() { }

  connect(){
    localStorage.setItem('token', 'MonBeauDouxEtSoyeuxToken')
  }

  disconnect(){
    localStorage.removeItem('token')
  }

  get isConnect() : boolean{
    return localStorage.getItem('token') != undefined
  }
}
