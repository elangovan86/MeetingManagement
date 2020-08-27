import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'meeting', redirectTo: 'meeting/index', pathMatch: 'full'},
  { path: 'meeting/index', component: IndexComponent },
  { path: 'meeting/:postId/view', component: ViewComponent },
  { path: 'meeting/create', component: CreateComponent },
  { path: 'meeting/:postId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingRoutingModule { }
