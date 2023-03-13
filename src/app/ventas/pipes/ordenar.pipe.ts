import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(cars: any[], ordenarPor:string = 'brand', orden:number=1): any[] {
    cars.sort(function (a, b) {
      if (a[ordenarPor] > b[ordenarPor]) {
        return 1*orden;
      }
      if (a[ordenarPor] < b[ordenarPor]) {
        return -1*orden;
      }
      // a must be equal to b
      return 0;
    });
    
    return cars;
  }

}
