import { Component, OnInit, Input } from '@angular/core';
import { GetService } from '../../services/data/get.service'

import { ActivatedRoute } from '@angular/router';
import { quiz } from '../../model/quiz'

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  @Input() quiz: quiz[];
  config;
  constructor(private get: GetService, private route: ActivatedRoute) {
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: quiz.length
    }
    
    
    
   }
  answer = [];
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.get.getquiz(id).subscribe(quiz => this.quiz = quiz)
      
    })
    
  }
  up() {
    this.config.currentPage ++;
  }
  down() {
    this.config.currentPage --;
  }

}
