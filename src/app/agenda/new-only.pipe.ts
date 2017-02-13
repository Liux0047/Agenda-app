import { Agenda } from './agenda';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newOnly'
})
export class NewOnlyPipe implements PipeTransform {

  transform(agendas: Agenda[], isActivated?: boolean): any {
    return isActivated ? agendas.filter(a => !a.talked) : agendas;
  }

}
