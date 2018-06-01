import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {
  transform(time: number) {
    return `${Math.floor(time/60)} : ${(time % 60) >= 10 ? (time % 60) : '0'+(time % 60)}`;
  }
}
