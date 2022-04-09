import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booked-venues',
  templateUrl: './booked-venues.component.html',
  styleUrls: ['./booked-venues.component.css']
})
export class BookedVenuesComponent implements OnInit {

  constructor() { }
  feed:boolean = false
  ngOnInit(): void {
  }

  
}
