import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { PopComponent } from './pages/pop/pop.component';
import { NewComponent } from './pages/new/new.component';
import { CategoryComponent } from './pages/category/category.component';
import { CurationComponent } from './pages//curation/curation.component';

const routes: Routes = [
  {
    path : '',
    component : MainComponent
  },
  {
    path : 'pop',
    component : PopComponent
  },
  {
    path : 'new',
    component : NewComponent
  },
  {
    path : 'category/list',
    component : CategoryComponent
  },
  {
    path : 'curation',
    component : CurationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
