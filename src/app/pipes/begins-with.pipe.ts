import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {

  // Test if string a is the beginning of string b
  public transform(a: string, b: string): boolean {
    return b.startsWith(a);
  }
}
