import { Component, ViewEncapsulation } from '@angular/core';
import { RowClassArgs } from '@progress/kendo-angular-grid';

@Component({
   selector: 'my-app',
   encapsulation: ViewEncapsulation.None,
   styles: [`
       .k-grid tr.even { background-color: #f45c42; }
       .k-grid tr.odd { background-color: #41f4df; }
   `],
   template: `
       <kendo-grid [data]="gridData" [rowClass]="rowCallback">
       </kendo-grid>
   `
})
export class AppComponent {
   public gridData: any[] = products;

   public rowCallback = (context: RowClassArgs) => {
       console.log(this);
       const isEven = context.index % 2 == 0;
       return {
           even: isEven,
           odd: !isEven
       };
   }
}

const products = [{
   "ProductID": 1,
   "ProductName": "Chai",
   "UnitPrice": 18.0000,
   "Discontinued": true
 }, {
   "ProductID": 2,
   "ProductName": "Chang",
   "UnitPrice": 19.0000,
   "Discontinued": false
 }
];
