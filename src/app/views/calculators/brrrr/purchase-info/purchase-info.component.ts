import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from '../../../../services/properties/properties.service';
import { BrrrrService } from '../../../../services/brrrr/brrrr.service';

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
	cashPurchaseBool:any =  false;
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
  totalProjectCost:number = +this.prchasePrice + +this.purchaseClosingCost + +this.estimatedRepairCost;
  equity:number = +this.arv - this.totalProjectCost;

  currentProperty:any = {};

  constructor(private router : Router, private propertiesService: PropertiesService, private brrrrService: BrrrrService) { }

  ngOnInit() {
    var tmpProperty = this.propertiesService.getcurrentPropertyInUse();
    if(tmpProperty && tmpProperty.purchaseInfo){
      this.currentProperty = tmpProperty;
      if(tmpProperty.purchaseInfo.prchasePrice){
        this.fillTheForm(tmpProperty.purchaseInfo);
      }
    }
  }

  onClickSubmit(dataIn) {
      // console.log("Data from purchase Info:", JSON.stringify(dataIn));     
      this.currentProperty.purchaseInfo = dataIn;   

      this.currentProperty.purchaseInfo.totalProjectCost = this.totalProjectCost;
         
      // console.log("Purchase Info Comp: prop info updated in db:", this.propertiesService.updateCurrentPropertyInUse(this.currentProperty));
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
    this.totalProjectCost = dataIn.totalProjectCost;
    this.refiCaprate =  dataIn.refiCaprate;
  }

}
