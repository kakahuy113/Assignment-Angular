import { Component, OnInit } from '@angular/core';
import { list } from '../../model/list'
import { config } from 'rxjs';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  list = [...list];
  config
  constructor() {
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.list.length
    }
   }
   

  ngOnInit() {
  }

  pageChanged(event){
    this.config.currentPage = event;
  }


}
