import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools/tools.component';
import { DiagramsComponent } from './diagrams/diagrams.component';

const routes: Routes = [
  { path: '', redirectTo: 'tools', pathMatch: 'full' },
  { path: 'tools', component: ToolsComponent },
  { path: 'diagrams', component: DiagramsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
