import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Authentication/auth.service'
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

}
