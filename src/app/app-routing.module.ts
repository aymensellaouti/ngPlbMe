import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
// cv
const routes: Routes = [
  { path: '', component: FirstComponent},
  { path: 'cv', component: CvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'color', component: ColorComponent},
  { path: 'word', component: MiniWordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
