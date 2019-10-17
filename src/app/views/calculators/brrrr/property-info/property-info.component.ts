import { Component, OnInit } from '@angular/core';
import { BrrrrService } from '../../../../services/brrrr/brrrr.service';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.scss']
})
export class PropertyInfoComponent implements OnInit {
  propertyTitle:string = "9999999999999";
  propertyAddress:string = "9999999999999";
  propertyCity:string = "9999999999999";
  propertyState:string = "9999999999999";
  propertyZip:string = "9999999999999";
  propertySalesDescription:string = "9999999999999";


  constructor(private brrrrService: BrrrrService) {    
    
   }

  ngOnInit() {
  }

  onClickSubmit(dataIn) {
      alert("This is the data being stored: ");
      console.log("Data in:", JSON.stringify(dataIn));
      this.brrrrService.updatePropertyDetails(dataIn);
  }

  updateFormValues(dataIn){
    this.propertyTitle = dataIn.propertyTitle;
    this.propertyAddress = dataIn.propertyAddress;
    this.propertyCity = dataIn.propertyCity;
    this.propertyState = dataIn.propertyState;
    this.propertyZip = dataIn.propertyZip;
    this.propertySalesDescription = dataIn.propertySalesDescription;
  }
}
