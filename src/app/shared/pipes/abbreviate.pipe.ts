import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviate'
})
export class AbbreviatePipe implements PipeTransform {
  transform(name: string): any {
    const splitedName = (name || '').split(/[\.\-_,; ]/);
    return splitedName.map((nameString: string) => nameString[0]).join('');
  }
}
