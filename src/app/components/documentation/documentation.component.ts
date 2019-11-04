import { Component, OnInit } from '@angular/core';
import { list } from '../../model/list'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  list = [...list];
  config
  constructor(private title : Title , private route : ActivatedRoute) { 
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.list.length
    }

    this.title.setTitle('Document');
  }

  ngOnInit() {
    
    
    
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
