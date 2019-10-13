import { Component, OnInit } from '@angular/core';
import { LandRService } from '../../services/LoginAndRegister/land-r.service';
import { NgForm , FormBuilder , FormGroup , Validator , FormControl, Validators } from '@angular/forms'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
   userform : FormGroup
  constructor(private service : LandRService, private formbuilder : FormBuilder ) { }
  users;
  submit : boolean = false;
  userlength;
  ngOnInit() {

    this.service.getUser().pipe(
      map(user => this.users = user )
      
    ).subscribe(user =>this.userlength = user.length)

    this.userform = this.formbuilder.group({
      username: ['' , Validators.required],
      password: ['' , Validators.required]
    })
  }
  onSubmit() {
    this.submit = true;
    const test = [...this.users]
    
    if(this.userform.invalid) {
      return window.alert("Err")
      
    }
   
    for ( var i = 0; i<this.userlength; i++) {
    if(this.userform.value.username === this.users[i].username && this.userform.value.password === this.users[i].password) {
      console.log("It's oke");
    }

    if(this.userform.value.username !== this.users[i].username && this.userform.value.password !== this.users[i].password) {
      console.log("It's not fucking good");
    }
  }
  }

}
