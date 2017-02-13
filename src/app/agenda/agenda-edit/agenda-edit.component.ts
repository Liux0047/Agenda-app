import { AgendaService } from './../agenda.service';
import { Agenda } from './../agenda';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-agenda-edit',
  templateUrl: './agenda-edit.component.html',
  styleUrls: ['./agenda-edit.component.css']
})
export class AgendaEditComponent implements OnInit, OnDestroy {
  item: Agenda = null;
  private fromMY = true;
  private isAdd = true;
  private subscription: Subscription;
  private itemIndex: number;

  constructor(private as: AgendaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.isAdd = !params.hasOwnProperty('id');
        if (!this.isAdd) {
          this.itemIndex = +params['id'];
          this.item = this.as.getAgenda(this.itemIndex);
        }
      }
    );
  }

  onSubmit(item: Agenda) {
    if (this.isAdd) {
      const newItem: Agenda = new Agenda(item.topic, item.content, new Date(), item.fromMY || false, false);
      this.as.addAgenda(newItem);
    } else {
      const newItem: Agenda = new Agenda(item.topic, item.content, new Date(item.date), this.item.fromMY, this.item.talked);
      this.as.updateAgenda(this.item, newItem);
    }
    this.as.storeData();
    this.navigateBack();
  }

  onDelete() {
    if (confirm('确定要删除该 Agenda 吗？')) {
      this.as.deleteAgenda(this.item);
      this.navigateBack();
    }
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
