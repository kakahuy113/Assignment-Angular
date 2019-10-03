import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {
  alert() {
    window.alert('Your messenger has been sent')
  }
  constructor() { }

  ngOnInit() {
  }

}
