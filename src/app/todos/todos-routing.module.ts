import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosListComponent } from './todos-list/todos-list.component';

import { TodosComponent } from './todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: ':id', component: TodosListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
