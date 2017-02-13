import { Agenda } from './agenda';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByKeyword'
})
export class FilterByKeywordPipe implements PipeTransform {

  transform(agendas: Agenda[], keyword?: string): any {
    return keyword !== null ? agendas.filter(a =>
      (a.topic && a.topic.includes(keyword)) || (a.content && a.content.includes(keyword))) :
      agendas;
  }

}
