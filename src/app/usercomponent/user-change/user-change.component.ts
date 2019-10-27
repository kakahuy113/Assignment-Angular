import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/Authentication/auth.service'

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.scss']
})
export class UserChangeComponent implements OnInit {

	constructor(private authService : AuthService) {}

	ngOnInit()
	{
		
	}

}
