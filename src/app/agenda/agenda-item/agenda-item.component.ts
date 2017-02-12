import { Router, ActivatedRoute } from '@angular/router';
import { AgendaService } from './../agenda.service';
import { Agenda } from './../agenda';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agenda-item',
  templateUrl: './agenda-item.component.html',
  styleUrls: ['./agenda-item.component.css']
})
export class AgendaItemComponent implements OnInit {
  @Input() itemIndex: number;
  @Input() agendaItem: Agenda;

  constructor(private as: AgendaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  markTalked(itemIndex: number) {
    this.as.markTalked(itemIndex);
  }

  onEditItem() {
    this.router.navigate(['/', this.itemIndex, 'edit']);
  }

}
