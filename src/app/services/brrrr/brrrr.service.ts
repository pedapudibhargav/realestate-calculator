import { Injectable } from '@angular/core';
import { PropertiesService } from '../properties/properties.service';

@Injectable({
  providedIn: 'root'
})
export class BrrrrService {
  

  constructor(private propertyService : PropertiesService) { }

  updatePropertyDetails(propertyInfoIn : any){
    var currentProperty : any = {};
    // console.log("BRRR - s - Property Info Received", propertyInfoIn);
    if(!propertyInfoIn.propertyId || propertyInfoIn.propertyId == ""){
      currentProperty = this.propertyService.createNewProperty();
    }
    else{
      currentProperty = this.propertyService.getcurrentPropertyInUse();
    }
    currentProperty.propertyInfo = propertyInfoIn
    // console.log("BRRR - s - before storing", currentProperty);
    // console.log("BRRR - s - after storing",this.propertyService.updateCurrentPropertyInUse(currentProperty));
  }


  updatePurchaseInfo(purchaseInfo : any){
    
  }

}
