import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Authentication/auth.service'
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

}
