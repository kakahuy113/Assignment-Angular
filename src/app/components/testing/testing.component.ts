import { Component, OnInit, Input } from '@angular/core';
import { GetService } from '../../services/data/get.service';

import { ActivatedRoute } from '@angular/router';
import { quiz } from '../../model/quiz'
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  quiz;
  config;
  constructor(private get: GetService, private route: ActivatedRoute) {
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: Number
    }
  }
  listChoose = [];
  changed(choose, index) {
    this.listChoose[index] = choose
    console.log(choose);

  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.get.getquiz(id).pipe(
        map(quiz => this.quiz = quiz)
      ).subscribe(quiz => {
        this.config.totalItems = quiz.length
      })

    })

    



  }
  up() {
    this.config.currentPage++;
  }
  down() {
    this.config.currentPage--;
  }
  firstpage() {
    this.config.currentPage = 1
  }
  lastpage() {
    this.config.currentPage = this.config.totalItems;
  }



}
