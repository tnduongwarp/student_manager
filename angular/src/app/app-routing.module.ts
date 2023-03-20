import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { LoginComponent } from './login/login.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path:'', component: ListStudentsComponent },
  { path:'student/add', component: AddStudentComponent },
  { path: 'student/get-all', component: ListStudentsComponent },
  { path: 'student/update/:id', component: UpdateStudentComponent },
  { path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
