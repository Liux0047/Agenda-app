import { Agenda } from './agenda';
import { Injectable, EventEmitter, isDevMode } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AgendaService {
  private url = isDevMode() ?
    'https://agenda-app-3097b.firebaseio.com/agenda-tst.json' :
    'https://agenda-app-3097b.firebaseio.com/agenda.json';
  private agendas: Agenda[] = [];
  // private agendas: Agenda[] = [
    // new Agenda('KD 打老东家', 'Kevin Durant and former teammates got emotional, fans even more so', new Date(), false, false),
    // new Agenda('练手 Angular', '嗯，搞了个这个小网页玩', new Date(), false, false),
    // new Agenda('Python 狂魔', '用半小时写了个Python来完成五分钟的 manual work,这是一种乐趣', new Date(2017, 1, 10), false, true),
    // new Agenda('吃火锅', '火锅底料不错，吃撑了堂睡着了', new Date(2017, 1, 11), true, true),
    // new Agenda('KD 打老东家', 'Kevin Durant and former teammates got emotional, fans even more so', new Date(), false, false),
    // new Agenda('练手 Angular', '嗯，搞了个这个小网页玩', new Date(), false, false),
    // new Agenda('Python 狂魔', '用半小时写了个Python来完成五分钟的 manual work,这是一种乐趣', new Date(2017, 1, 10), false, true),
    // new Agenda('吃火锅', '火锅底料不错，吃撑了堂睡着了', new Date(2017, 1, 11), true, true),
  // ];

  private selectedAgenda: Agenda = null;
  agendasChanged = new EventEmitter<Agenda[]>();

  constructor(private http: Http) {
    this.fetchData();
  }

  getAgendas() {
    return this.agendas;
  }

  getAgenda(i: number) {
    return this.agendas[i];
  }

  getAgendaIndex(item: Agenda) {
    return this.agendas.indexOf(item);
  }

  markTalked(item: Agenda) {
    this.agendas[this.agendas.indexOf(item)].talked = true;
    this.storeData();
  }

  addAgenda(item: Agenda) {
    this.agendas.unshift(item);
  }

  updateAgenda(old: Agenda, newItem: Agenda) {
    this.agendas[this.agendas.indexOf(old)] = newItem;
  }

  deleteAgenda(item: Agenda) {
    this.agendas.splice(this.agendas.indexOf(item), 1);
  }

  storeData() {
    const body = JSON.stringify(this.agendas);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.url, body, { headers: headers }).subscribe(
      (data: Response) => console.log(data)
    );
  }

  fetchData() {
    return this.http.get(this.url)
      .map((response: Response) => response.json())
      .subscribe(
      (data: Agenda[]) => {
        this.agendas = data;
        this.agendasChanged.emit(this.agendas);
      });
  }

}
