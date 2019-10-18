import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rehab-cost',
  templateUrl: './rehab-cost.component.html',
  styleUrls: ['./rehab-cost.component.scss']
})
export class RehabCostComponent implements OnInit {
  activeTab = "";
  constructor() { }

  ngOnInit() {
    this.activeTab = "home";
  }

  tabsControler(){
    console.log("This is working");
  }
}
