import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  constructor(private _authService: AuthService){}

  get isConnect() : boolean{
    return this._authService.isConnect
  }

  connect(){
    this._authService.connect()
  }

  disconnect(){
    this._authService.disconnect()
  }

}
