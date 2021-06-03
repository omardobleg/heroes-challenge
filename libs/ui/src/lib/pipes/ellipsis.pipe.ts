import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, size: number = 200): unknown {
    return value
      ? `${value.slice(0, size)}${value.length > size ? '...' : ''}`
      : '';
  }
}
