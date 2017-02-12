import { AgendaService } from './agenda/agenda.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { AgendaItemComponent } from './agenda/agenda-item/agenda-item.component';
import { AgendaEditComponent } from './agenda/agenda-edit/agenda-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    AgendaListComponent,
    AgendaItemComponent,
    AgendaEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
