import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderemoji',
})
export class GenderEmojiPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value === 'male') {
      return value + ' 👦';
    }
    if (value === 'female') {
      return value + ' 👧';
    } else {
      return ' 👽 ';
    }
  }
}
