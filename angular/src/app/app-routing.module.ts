import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { InputScoreComponent } from './input-score/input-score.component';
import { AddpointComponent } from './addpoint/addpoint.component';
import { ListpostComponent } from './listpost/listpost.component';
import { AddpostComponent } from './addpost/addpost.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'student/list', component: ListStudentsComponent },
  { path: 'student/add', component: AddStudentComponent },
  { path: 'student/update/:id', component: UpdateStudentComponent },
  { path: 'score/list', component: InputScoreComponent},
  { path: 'score/add/:id', component: AddpointComponent},
  { path: 'post/list', component: ListpostComponent},
  { path: 'post/add', component: AddpostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
