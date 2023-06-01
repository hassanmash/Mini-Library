import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(value: boolean | undefined, ...args: unknown[]): string {
    if(value){
      return 'YES';
    }
    return 'NO';
  }

}
