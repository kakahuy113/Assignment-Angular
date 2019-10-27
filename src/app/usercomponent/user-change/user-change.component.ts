import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.scss']
})
export class UserChangeComponent implements OnInit {

	constructor(private http: HttpClient, private route: ActivatedRoute) {

	}

	

	ngOnInit()
	{
		
	}

}
