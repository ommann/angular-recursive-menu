import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  // return the length of the array or string
  // return 0 for undefined or null
  transform(value: any[] | string | undefined | null): number {
    return value?.length ?? 0;
  }
}
