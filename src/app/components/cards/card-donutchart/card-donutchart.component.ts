import { Component, OnInit } from '@angular/core';
import { NgxDonutChartModule,NgxDonutChartComponent,NgxDonutChartService } from 'ngx-doughnut-chart';
@Component({
  selector: 'app-card-donutchart',
  templateUrl: './card-donutchart.component.html',
  styleUrls: ['./card-donutchart.component.css']
})
export class CardDonutchartComponent implements OnInit {

  donutChartData = [
    {
      label: 'sukanpartyplot ',
      value: 25,
      color: '#a855f7',
    },
    {
      label: 'Real Madrid	',
      value:25,
      color: '#0d9488',
    },
    {
      label: 'FC Bayern München',
      value: 25,
      color: '#22c55e',
    },
    {
      label: 'FC Bayern München',
      value: 25,
      color: '#475569',
    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
