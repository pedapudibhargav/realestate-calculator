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
  currentPropertyReport: any = {
    rehabPeriod: {
      monthlyIncome: 0,
      montlyExpenses: 0,
      monthlyCashFlow: 0,
      timeToRefinance: 0,
      cashOnCashROI: 0
    },
    initialRentalPeriod: {
      monthlyIncome: 0,
      montlyExpenses: 0,
      monthlyCashFlow: 0,
      timeToRefinance: 0,
      cashOnCashROI: 0
    },
    refinancePeriod: {
      monthlyIncome: 0,
      montlyExpenses: 0,
      monthlyCashFlow: 0,
      timeToRefinance: 0,
      cashOnCashROI: 0,
      principal: 0,
      interest: 0,
      payments: 0,
      monthlyPayment: 0,
      montlyCashflow:0
    }
  }
  constructor(private propertiesService: PropertiesService, private brrrrService: BrrrrService) {
    this.currentProperty = this.propertiesService.getcurrentPropertyInUse();
    console.log("Current Property:", this.currentProperty);
    this.computeAnalysis();
  }

  ngOnInit() {
  }

  computeAnalysis() {
    var rentalInfo = this.currentProperty.rentalInfo;
    var purchaseInfo = this.currentProperty.purchaseInfo;
    var rentalInfoKeys = Object.keys(rentalInfo);
    var expenses = 0;
    var income = 0;

    this.currentPropertyReport.refinancePeriod.principal = +purchaseInfo.loanAmount;
    this.currentPropertyReport.refinancePeriod.interest = +purchaseInfo.loanInterestRate / 100 / 12;
    this.currentPropertyReport.refinancePeriod.payments = +purchaseInfo.refiAomortizedDurationInYears * 12;
    var x = Math.pow(1 + this.currentPropertyReport.refinancePeriod.interest, this.currentPropertyReport.refinancePeriod.payments);
    this.currentPropertyReport.refinancePeriod.monthlyPayment = (this.currentPropertyReport.refinancePeriod.principal * x * this.currentPropertyReport.refinancePeriod.interest) / (x - 1);
    // console.log("Monthly Payment:" + this.currentPropertyReport.refinancePeriod.monthlyPayment);
    for (var i = 0; i < rentalInfoKeys.length; i++) {
      if (rentalInfoKeys[i] != "grossMonthlyRent" && rentalInfoKeys[i] != "otherMontlyIncome") {
        expenses = expenses + +rentalInfo[rentalInfoKeys[i]];
      }
      else{
        income = income + + rentalInfo[rentalInfoKeys[i]];
      }
    }

    expenses = expenses + this.currentPropertyReport.refinancePeriod.monthlyPayment;
    this.currentPropertyReport.refinancePeriod.expenses = expenses;
    this.currentPropertyReport.refinancePeriod.income = income;
    this.currentPropertyReport.refinancePeriod.montlyCashflow = income - expenses;
    // this.currentPropertyReport.refinancePeriod.roi = this.roi();
  }

  roi(cost, gains) {
    cost = parseFloat(cost);
    gains = parseFloat(gains);
  
    var top, bottom;
    top = gains - cost;
    bottom = top / cost;
    var roiVal = bottom;
  
    roiVal = roiVal * 100;
    return roiVal ;
  }


  computePrivateMoneyLender(){

  }
}
