import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../../../../services/properties/properties.service';
import { BrrrrService } from '../../../../../services/brrrr/brrrr.service';

@Component({
  selector: 'app-brrrr-report',
  templateUrl: './brrrr-report.component.html',
  styleUrls: ['./brrrr-report.component.scss']
})
export class BrrrrReportComponent implements OnInit {
  currentProperty: any = {};
  reportBeingDisplayed = 1;
  dataToDisplay:any = {
    monthlyIncome : 0,
    monthlyExpenses : "",
    monthlyCashFlow : "",
    proFormaCapRate: "",
    noi:"",
    timeToRefinance:"",
    cashOnCashROI:""
  };

  dataTableKeys = [];
  constructor(private propertiesService: PropertiesService, private brrrrService: BrrrrService) {
    this.currentProperty = this.propertiesService.getcurrentPropertyInUse();
    this.reportOverviewBtnsClicked(3);
  }

  ngOnInit() {
  }
 
  roi(capital, gains) {    
    return (100/capital)*gains ;
  }

  reportOverviewBtnsClicked(validator){
    
    if(validator == 1){
      // console.log("a");
      this.dataToDisplay.monthlyIncome = 0;
      this.dataToDisplay.monthlyExpenses = this.currentProperty.purchaseInfo.purchaseLoanMonthlyPayment;
      this.dataToDisplay.monthlyCashFlow = this.dataToDisplay.monthlyIncome - this.dataToDisplay.monthlyExpenses;
      this.dataToDisplay.timeToRefinance = this.currentProperty.purchaseInfo.monthsBeforeRefinance;
      console.log("moneyBorrowed:" + this.currentProperty.purchaseInfo.totalMoneyBorrowed);
      console.log("cashflow:" + this.dataToDisplay.monthlyCashFlow);
      this.dataToDisplay.roi = this.roi(+this.currentProperty.purchaseInfo.totalMoneyBorrowed, (+this.dataToDisplay.monthlyCashFlow * 12));
      this.dataToDisplay.roi = this.dataToDisplay.roi.toFixed(2);
    }
    else if(validator == 2){
      this.dataToDisplay.monthlyIncome = this.currentProperty.rentalInfo.grossMonthlyRent;
      this.dataToDisplay.monthlyExpenses = this.currentProperty.rentalInfo.montlyPropertyExpensesWithoutPnI + +this.currentProperty.purchaseInfo.purchaseLoanMonthlyPayment;
      this.dataToDisplay.monthlyCashFlow = +this.dataToDisplay.monthlyIncome - +this.dataToDisplay.monthlyExpenses;
      this.dataToDisplay.timeToRefinance = 0;
      this.dataToDisplay.roi = this.roi(+this.currentProperty.purchaseInfo.finalTotalMoneyInvested, (+this.dataToDisplay.monthlyCashFlow * 12));
      this.dataToDisplay.roi = this.dataToDisplay.roi.toFixed(2);      
    }
    else{
      this.dataToDisplay.monthlyIncome = this.currentProperty.rentalInfo.grossMonthlyRent;
      this.dataToDisplay.monthlyExpenses = this.currentProperty.rentalInfo.montlyPropertyExpensesWithoutPnI + +this.currentProperty.purchaseInfo.refiMonthylyPayment;
      this.dataToDisplay.monthlyCashFlow = +this.dataToDisplay.monthlyIncome - +this.dataToDisplay.monthlyExpenses;
      this.dataToDisplay.timeToRefinance = 0;
      this.dataToDisplay.roi = this.roi(+this.currentProperty.purchaseInfo.finalTotalMoneyInvested, (+this.dataToDisplay.monthlyCashFlow * 12));
      this.dataToDisplay.roi = this.dataToDisplay.roi.toFixed(2);      
    }

    this.dataTableKeys = Object.keys(this.currentProperty.rentalInfo.expenses);
    this.reportBeingDisplayed = validator;
  }
}
