import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from '../../services/data/get.service';
import { AuthService} from '../../services/Authentication/auth.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  total : number;
  temp : number ;
  mark :number;
  public pieChartLabels = ['Done' , 'Fail']
  public pieChartData = [];
  public pieChartType = 'pie';
  public chartColors  = ['white' , 'rgba(255, 159, 64, 0.2)']
  constructor(
    private route : ActivatedRoute, 
    private data : GetService, 
    private authService : AuthService,
    private location : Location
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       this.mark = parseInt(params.get('mark'));
      let id = params.get('id');
      this.data.getquiz(id).subscribe(quiz => {
        this.total = quiz.length;
        this.temp = Math.round(((this.mark/this.total)*100) * 100) / 100        
        this.pieChartData = [this.temp, 100-this.temp];
      })    
     
      
    })
    
    
  }

}
