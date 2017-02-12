import { AgendaEditComponent } from './agenda/agenda-edit/agenda-edit.component';
import { AgendaComponent } from './agenda/agenda.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/agenda', pathMatch: 'full' },
    { path: 'agenda', component: AgendaComponent },
    { path: 'new', component: AgendaEditComponent },
    { path: ':id/edit', component: AgendaEditComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
