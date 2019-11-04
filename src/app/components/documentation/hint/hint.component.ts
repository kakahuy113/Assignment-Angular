import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from '../../../services/data/get.service'
import { map } from 'rxjs/operators';
import { quiz } from '../../../model/quiz';
import { answer } from '../../../model/Answer'
@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {
  quiz = [];
  answer;
  test
  constructor(private route : ActivatedRoute ,private data : GetService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.data.getquiz(id).pipe(
        map(quiz => this.quiz = quiz)
      ).subscribe(quiz => {
        quiz.forEach(data => {
          let i =0;
        })
      })
      
      
     

    })
  }
  listOfresult = []
 

}
