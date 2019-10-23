import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }

  getcurrentPropertyInUse() {
    if (window.localStorage) {
      if (localStorage.currentPropertyInUse) {
        return JSON.parse(localStorage.currentPropertyInUse);
      }
    }
    else {
      alert("Local storage is not supported by the browser. Please update your browser");
    }
  }

  createNewProperty() {
    if (window.localStorage) {
      console.log("LocalStorage is supported");
      var today = new Date();
      var date = today.getFullYear() +""+ (today.getMonth() + 1) +""+ today.getDate();
      var time = today.getHours() +""+  today.getMinutes() + ""+ today.getSeconds();
      var dateTime = date + time;

      let newProperty = {
        propertyInfo: {
          propertyId: dateTime
        },
        purchaseInfo: {},
        rentalInfo: {}
      }
      localStorage.currentPropertyInUse = JSON.stringify(newProperty);
      return newProperty;
    }
    else {
      alert("Local storage is not supported by the browser. Please update your browser");
    }
  }

  updateCurrentPropertyInUse(updatedProperty) {
    if (window.localStorage) {
      if (localStorage.currentPropertyInUse) {
        localStorage.currentPropertyInUse = JSON.stringify(updatedProperty);
        var propertyKey = updatedProperty.propertyInfo.propertyId;
        var allProps = this.getAllProperties();
        allProps[propertyKey] = updatedProperty;
        this.updateAllProperties(allProps);
        return JSON.parse(localStorage.currentPropertyInUse);
      }
    }
    else {
      alert("Local storage is not supported by the browser. Please update your browser");
    }
  }

  updateAllProperties(allProperties){
    return localStorage.allProperties = JSON.stringify(allProperties);
  }
  getAllProperties(){
    if (window.localStorage) {
      if (localStorage.allProperties) {
        return JSON.parse(localStorage.allProperties);
      }else{
        alert("There are no properties");
      }
    }
    else {

      alert("Local storage is not supported by the browser. Please update your browser");
    }
  }

}
