import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RehabCostComponent } from './rehab-cost/rehab-cost.component';
import { BrrrrComponent } from './brrrr/brrrr.component';
import { PropertyInfoComponent } from './brrrr/property-info/property-info.component';
import { PurchaseInfoComponent } from './brrrr/purchase-info/purchase-info.component';
import { RentalInfoComponent } from './brrrr/rental-info/rental-info.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ExteriorExpensesComponent } from './rehab-cost/exterior-expenses/exterior-expenses.component';
import { BrrrrReportComponent } from './brrrr/report/brrrr-report/brrrr-report.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Calculators'
    },
    children: [
      {
        path: '',
        redirectTo: 'calculators'
      },
      {
        path: 'rehab-cost',
        component: RehabCostComponent,
        data: {
          title: 'Rehab Cost Calculator'
        }
      },
      {
        path: 'brrrr',
        component: BrrrrComponent,
        data: {
          title: 'BRRRR'
        },
        children:[
          {
            path:'property-info',
            component: PropertyInfoComponent,
            data:{
              title:'Property Information'
            }
          },
          {
            path:'purchase-info',
            component: PurchaseInfoComponent,
            data:{
              title:'Pruchase Information'
            }
          },
          {
            path:'rental-info',
            component: RentalInfoComponent,
            data:{
              title:'Rental Information'
            }
          },
          {
            path:'report',
            component: BrrrrReportComponent,
            data:{
              title:'Rental Information'
            }
          }           
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule,CommonModule],
  exports: [RouterModule],
  declarations: [RehabCostComponent, BrrrrComponent, PropertyInfoComponent, PurchaseInfoComponent, RentalInfoComponent, ExteriorExpensesComponent, BrrrrReportComponent]
})
export class CalculatorsModule { }
