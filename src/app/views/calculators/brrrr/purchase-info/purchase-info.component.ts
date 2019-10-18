import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-info',
  templateUrl: './purchase-info.component.html',
  styleUrls: ['./purchase-info.component.scss']
})
export class PurchaseInfoComponent implements OnInit {

  prchasePrice:string =  "123";
	arv:string =  "123";
	purchaseClosingCost:string =  "123";
	estimatedRepairCost:string =  "123";
	cashPurchaseBool:any =  true;
	downPaymentOfPurchasePrice:string =  "123";
	loanInterestRatePercentage:string =  "123";
	pointsChargedByLender:string =  "123";
	otherChargesFromTheLender:string =  "123";
	loanFeesAndPoints:string =  "outOfPocket";
	interestOnly:string =  "no";
	includesPMI:string =  "yes";
	amortizedOverYearsCount:string =  "12";
	monthsBeforeRefinance:string =  "1";
	rehabTimeInMonths:string =  "3";
	loanAmount:string =  "123";
	loanInterestRate:string =  "123";
	otherRefiClosingCosts:string =  "123";
	refiAomortizedDurationInYears:string =  "123";
  refiCaprate:string =  "12";
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onClickSubmit(dataIn) {
      console.log("Data from purchase Info:", JSON.stringify(dataIn));
      this.router.navigate(['/calculators/brrrr/rental-info']);
  }

  fillTheForm(dataIn){
    this.prchasePrice =  dataIn.prchasePrice;
    this.arv =  dataIn.arv;
    this.purchaseClosingCost =  dataIn.purchaseClosingCost;
    this.estimatedRepairCost =  dataIn.estimatedRepairCost;
    this.cashPurchaseBool =  dataIn.cashPurchaseBool;
    this.downPaymentOfPurchasePrice =  dataIn.downPaymentOfPurchasePrice;
    this.loanInterestRatePercentage =  dataIn.loanInterestRatePercentage;
    this.pointsChargedByLender =  dataIn.pointsChargedByLender;
    this.otherChargesFromTheLender =  dataIn.otherChargesFromTheLender;
    this.loanFeesAndPoints =  dataIn.loanFeesAndPoints;
    this.interestOnly =  dataIn.interestOnly;
    this.includesPMI =  dataIn.includesPMI;
    this.amortizedOverYearsCount =  dataIn.amortizedOverYearsCount;
    this.monthsBeforeRefinance =  dataIn.monthsBeforeRefinance;
    this.rehabTimeInMonths =  dataIn.rehabTimeInMonths;
    this.loanAmount =  dataIn.loanAmount;
    this.loanInterestRate =  dataIn.loanInterestRate;
    this.otherRefiClosingCosts =  dataIn.otherRefiClosingCosts;
    this.refiAomortizedDurationInYears =  dataIn.refiAomortizedDurationInYears;
    this.refiCaprate =  dataIn.refiCaprate;
  }

}
