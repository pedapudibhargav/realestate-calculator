import { Component, OnInit } from '@angular/core';
import { BrrrrService } from '../../../../services/brrrr/brrrr.service';
import { Router } from '@angular/router';
import { PropertiesService } from '../../../../services/properties/properties.service';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.scss']
})
export class PropertyInfoComponent implements OnInit {
  propertyId:number = 0;
  propertyTitle:string = "";
  propertyAddress:string = "";
  propertyCity:string = "";
  propertyState:string = "";
  propertyZip:string = "";
  propertySalesDescription:string = "";

  isNewProperty:boolean = true;

  constructor(private brrrrService: BrrrrService, private router : Router, private propertyService: PropertiesService) {    
    var tmpCurrPropertyInUse = this.propertyService.getcurrentPropertyInUse();
    if(tmpCurrPropertyInUse){
      console.log("Property Info Component: currentPropertyInUse:", tmpCurrPropertyInUse);
      this.isNewProperty = false;
      this.updateFormValues(tmpCurrPropertyInUse.propertyInfo);      
    }  
    else{
      this.propertyId  =  +this.propertyService.createNewProperty().propertyInfo.propertyId;
    }
   }

  ngOnInit() {
    
  }

  ngAfterViewInit(){ 
  }

  onClickSubmit(dataIn) {
      console.log("Data in:", JSON.stringify(dataIn));
      this.brrrrService.updatePropertyDetails(dataIn);
      this.router.navigate(['/calculators/brrrr/purchase-info']);
  }

  updateFormValues(dataIn){        
    this.propertyId = dataIn.propertyId;
    this.propertyTitle = dataIn.propertyTitle;
    this.propertyAddress = dataIn.propertyAddress;
    this.propertyCity = dataIn.propertyCity;
    this.propertyState = dataIn.propertyState;
    this.propertyZip = dataIn.propertyZip;
    this.propertySalesDescription = dataIn.propertySalesDescription;
  }
}
