import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-info',
  templateUrl: './rental-info.component.html',
  styleUrls: ['./rental-info.component.scss']
})
export class RentalInfoComponent implements OnInit {

  constructor(private router : Router) { }

  grossMonthlyRent:string =  "123";
	otherMontlyIncome:string =  "123";
	electricity:string =  "123";
	waterAndSewer:string =  "123123";
	pmi:string =  "123";
	garbage:string =  "123";
	lawnMaintainance:string =  "123";
	snowRemovalPerMonth:string =  "123";
	hoas:string =  "123";
	montlyInsurance:string =  "123";
	propertyTaxes:string =  "123";
	otherMontlyExpenses:string =  "123";
	vacancy:string =  "123123";
	repairsAndMaintenance:string =  "123";
	capitalExpenditure:string =  "123";
  managementFees:string =  "123";
  annualPropertyValueGrowthPercent:string =  "123";
	annualIncomGrowthPercent:string =  "123";
	annualExpenseGrowth:string =  "123";
  salesExpensesPercentage:string =  "123";
  
  ngOnInit() {
  }


  onClickSubmit(dataIn) {
      console.log("Data from Rental Info:", JSON.stringify(dataIn));
      // this.router.navigate(['/calculators/brrrr/rental-info']);
  }
}
