import { Component, OnInit } from '@angular/core';
import { LandRService } from '../../services/LoginAndRegister/land-r.service';
import { User } from '../../model/login';
import { NgForm, FormBuilder , FormGroup , Validator , Validators , FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
}) 
export class SignUpComponent implements OnInit {
  user : User;
  constructor(private service : LandRService,private formbuidler : FormBuilder) { }
  
  ngOnInit() {
    
  }

}
