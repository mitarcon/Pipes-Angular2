import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidepass'
})
export class HidepassPipe implements PipeTransform {

  transform(value: string, hide: boolean): string {
    if ( hide ){
      if( typeof value !== undefined ){
        var count: number = value.length;
        var output: string = "";
        while ( count > 0 ) {
          output = output + "*";
          count--;
        }
        return output;
      }else{
        return "";
      }

    }else {
      return value;
    }

  }

}
