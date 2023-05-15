
import { CreateJoyaComponent } from './create-joya/create-joya.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoyaListComponent } from './joya-list/joya-list.component';
import { UpdateJoyaComponent } from './update-joya/update-joya.component';

const routes: Routes = [
  { path: '', redirectTo: 'joya', pathMatch: 'full' },
  { path: 'joyas', component: JoyaListComponent },
  { path: 'add', component: CreateJoyaComponent },
  { path: 'update/:id', component: UpdateJoyaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
