import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from '../../../../services/properties/properties.service';
import { BrrrrService } from '../../../../services/brrrr/brrrr.service';

@Component({
	selector: 'app-rental-info',
	templateUrl: './rental-info.component.html',
	styleUrls: ['./rental-info.component.scss']
})
export class RentalInfoComponent implements OnInit {

	constructor(private router: Router, private propertiesService:PropertiesService, private brrrrService : BrrrrService) { }

	grossMonthlyRent: string = "123";
	otherMontlyIncome: string = "123";
	electricity: string = "123";
	waterAndSewer: string = "123123";
	pmi: string = "123";
	garbage: string = "123";
	lawnMaintainance: string = "123";
	snowRemovalPerMonth: string = "123";
	hoas: string = "123";
	montlyInsurance: string = "123";
	propertyTaxes: string = "123";
	otherMontlyExpenses: string = "123";
	vacancy: string = "123123";
	repairsAndMaintenance: string = "123";
	capitalExpenditure: string = "123";
	managementFees: string = "123";
	annualPropertyValueGrowthPercent: string = "123";
	annualIncomGrowthPercent: string = "123";
	annualExpenseGrowth: string = "123";
	salesExpensesPercentage: string = "123";

	currentProperty:any = {};


	ngOnInit() {
		var tmpProperty = this.propertiesService.getcurrentPropertyInUse();
		if(tmpProperty && tmpProperty.rentalInfo){
		  this.currentProperty = tmpProperty;
		  if(tmpProperty.rentalInfo.grossMonthlyRent){
			this.fillInTheForm(tmpProperty.rentalInfo);
		  }
		}
	}


	onClickSubmit(dataIn) {
		console.log("Data from Rental Info:", JSON.stringify(dataIn));
		var keys = Object.keys(dataIn);
		var monthlyTotalIncome = 0;
		var monthlyTotalExpenses = 0;
		for(var i=0 ; i < keys.length; i++){
			if(keys[i] == "grossMonthlyRent" || keys[i] == "otherMontlyIncome"){
				monthlyTotalIncome += +dataIn[keys[i]];
			}
			else if(keys[i] == "annualIncomGrowthPercent" || keys[i] == "annualPropertyValueGrowthPercent" || keys[i] == "annualExpenseGrowth" || keys[i] == "salesExpensesPercentage"){

			}
			else{
				monthlyTotalExpenses += +dataIn[keys[i]];
			}
		}
		dataIn.montlyTotalIncome = monthlyTotalIncome;
		dataIn.montlyPropertyExpensesWithoutPnI = monthlyTotalExpenses;
		this.currentProperty.rentalInfo = dataIn;      
		console.log("Purchase Info Comp: prop info updated in db:", this.propertiesService.updateCurrentPropertyInUse(this.currentProperty));
		this.router.navigate(['/calculators/brrrr/report']);
	}

	fillInTheForm(dataIn) {
		this.grossMonthlyRent = dataIn.grossMonthlyRent  ;
		this.otherMontlyIncome = dataIn.otherMontlyIncome  ;
		this.electricity = dataIn.electricity  ;
		this.waterAndSewer = dataIn.waterAndSewer  ;
		this.pmi = dataIn.pmi  ;
		this.garbage = dataIn.garbage  ;
		this.lawnMaintainance = dataIn.lawnMaintainance  ;
		this.snowRemovalPerMonth = dataIn.snowRemovalPerMonth  ;
		this.hoas = dataIn.hoas  ;
		this.montlyInsurance = dataIn.montlyInsurance  ;
		this.propertyTaxes = dataIn.propertyTaxes  ;
		this.otherMontlyExpenses = dataIn.otherMontlyExpenses  ;
		this.vacancy = dataIn.vacancy  ;
		this.repairsAndMaintenance = dataIn.repairsAndMaintenance  ;
		this.capitalExpenditure = dataIn.capitalExpenditure  ;
		this.managementFees = dataIn.managementFees  ;
		this.annualPropertyValueGrowthPercent = dataIn.annualPropertyValueGrowthPercent  ;
		this.annualIncomGrowthPercent = dataIn.annualIncomGrowthPercent  ;
		this.annualExpenseGrowth = dataIn.annualExpenseGrowth  ;
		this.salesExpensesPercentage = dataIn.salesExpensesPercentage  ;
	}
}
