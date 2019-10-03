import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { list } from '../../model/list';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list = [...list]
  constructor() { }

  ngOnInit() {

   
  }
 

}
