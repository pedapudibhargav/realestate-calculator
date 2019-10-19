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
	amortizedOverMonthsCount:string =  "12";
	monthsBeforeRefinance:string =  "1";
	rehabTimeInMonths:string =  "3";
	refiLoanAmount:string =  "123";
	refiLoanInterestRate:string =  "123";
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

  convertPointsToCash(moneyRequired, points){
    return (moneyRequired/100) * +points;
  }

  getInterestPayment(princ, intr){
    return (((princ/100) * intr)/12).toFixed(2);
  }

  getMonthlyPayment(princ, intr, term){
    intr = intr/1200;
    term = term *12
    var payment = +princ*(+intr * Math.pow((1 + +intr), +term))/(Math.pow((1 + +intr), +term) - 1);
    console.log("Montly Payment:" + payment);
	  return payment.toFixed(2);
  }

  onClickSubmit(dataIn) {
      // console.log("Data from purchase Info:", JSON.stringify(dataIn));     


      /* -------------- START - Hard Money Caluclations  -------------- */
      this.currentProperty.purchaseInfo = dataIn;  
      var tempPurchaseInfo =  this.currentProperty.purchaseInfo;

      this.currentProperty.purchaseInfo.totalProjectCost = +this.prchasePrice + +this.purchaseClosingCost + +this.estimatedRepairCost;
      this.currentProperty.purchaseInfo.equityRemaining = +this.arv - this.currentProperty.purchaseInfo.totalProjectCost;

      this.currentProperty.purchaseInfo.cashRequiredAtPurchase = +tempPurchaseInfo.totalProjectCost;

      var totalMoneyBorrowed = this.currentProperty.purchaseInfo.cashRequiredAtPurchase - +tempPurchaseInfo.downPaymentOfPurchasePrice;
      var totalMoneyOutOfPocket = +tempPurchaseInfo.downPaymentOfPurchasePrice;

      if(tempPurchaseInfo.loanFeesAndPoints == "outOfPocket"){
        totalMoneyOutOfPocket = totalMoneyOutOfPocket + +tempPurchaseInfo.otherChargesFromTheLender + this.convertPointsToCash(totalMoneyBorrowed, tempPurchaseInfo.pointsChargedByLender);
      }
      else{
        totalMoneyBorrowed = totalMoneyBorrowed + +this.currentProperty.purchaseInfo.otherChargesFromTheLender + this.convertPointsToCash(totalMoneyBorrowed, tempPurchaseInfo.pointsChargedByLender);
      }

      this.currentProperty.purchaseInfo.totalMoneyBorrowed = totalMoneyBorrowed;
      this.currentProperty.purchaseInfo.totalMoneyOutOfPocket = totalMoneyOutOfPocket;
      this.currentProperty.purchaseInfo.purchaseLoanMonthlyPayment = this.getInterestPayment(totalMoneyBorrowed, +tempPurchaseInfo.loanInterestRatePercentage);
      /* -------------- END - Hard Money Caluclations  -------------- */



      /* -------------- START - Refi Caluclations  -------------- */
      var refiLoanAmount = +tempPurchaseInfo.refiLoanAmount;
      var refiMonthylyPayment = this.getMonthlyPayment(refiLoanAmount, +tempPurchaseInfo.refiLoanInterestRate, +tempPurchaseInfo.refiAomortizedDurationInYears);
      var refiTotalMoneyOutOfPockt = totalMoneyOutOfPocket + +tempPurchaseInfo.otherRefiClosingCosts;
      var finalTotalMoneyInvested = (totalMoneyBorrowed + refiTotalMoneyOutOfPockt) - refiLoanAmount;

      this.currentProperty.purchaseInfo.refiMonthylyPayment = refiMonthylyPayment;
      this.currentProperty.purchaseInfo.refiTotalMoneyOutOfPockt = refiTotalMoneyOutOfPockt;
      this.currentProperty.purchaseInfo.finalTotalMoneyInvested = finalTotalMoneyInvested;
      

      /* -------------- END - Refi Caluclations  -------------- */
      let objAfterSaved = this.propertiesService.updateCurrentPropertyInUse(this.currentProperty);
      // console.log("Purchase Info Comp: prop info updated in db:",objAfterSaved);
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
    this.amortizedOverMonthsCount =  dataIn.amortizedOverMonthsCount;
    this.monthsBeforeRefinance =  dataIn.monthsBeforeRefinance;
    this.rehabTimeInMonths =  dataIn.rehabTimeInMonths;
    this.refiLoanAmount =  dataIn.refiLoanAmount;
    this.refiLoanInterestRate =  dataIn.refiLoanInterestRate;
    this.otherRefiClosingCosts =  dataIn.otherRefiClosingCosts;
    this.refiAomortizedDurationInYears =  dataIn.refiAomortizedDurationInYears;
    this.totalProjectCost = dataIn.totalProjectCost
    this.refiCaprate =  dataIn.refiCaprate;
  }

}
