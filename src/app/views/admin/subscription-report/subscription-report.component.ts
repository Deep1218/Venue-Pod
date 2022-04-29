import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-subscription-report',
  templateUrl: './subscription-report.component.html',
  styleUrls: ['./subscription-report.component.css']
})
export class SubscriptionReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
}
