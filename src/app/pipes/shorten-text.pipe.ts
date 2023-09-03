import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shortenText'})
export class ShortenTextPipe implements PipeTransform {

  transform(text: string): string {
    let lines: string[] = text.split("\n");
    return lines.length>3?`${text.substring(
      0, lines[0].length+lines[1].length+lines[2].length
    )}....`:text;
  }

}
