import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrrrrService {

  constructor() { }

  updatePropertyDetails(propertyInfoIn : any){
    console.log("BrrrrService propertyInfoReceived", propertyInfoIn);
  }

}
