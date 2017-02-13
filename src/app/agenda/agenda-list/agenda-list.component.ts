import { AgendaService } from './../agenda.service';
import { Agenda } from './../agenda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.css']
})
export class AgendaListComponent implements OnInit {

  private agendaItems: Agenda[] = null;
  private isNewOnly = true;

  constructor(private as: AgendaService) { }

  ngOnInit() {
    this.agendaItems = this.as.getAgendas();
    this.as.agendasChanged.subscribe(
      (agendas: Agenda[]) => this.agendaItems = agendas
    );
  }

  viewNewOnly() {
    this.isNewOnly = true;
  }

  viewAll() {
    this.isNewOnly = false;
  }

  log(s: string) {
    console.log(s);
  }

}
