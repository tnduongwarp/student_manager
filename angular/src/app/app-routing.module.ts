import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { QrcodegenneratorComponent } from './qrcodegennerator/qrcodegennerator.component';
import { ListmissComponent } from './listmiss/listmiss.component';
import { AddmissComponent } from './addmiss/addmiss.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'student/list', component: ListStudentsComponent },
  { path: 'student/add', component: AddStudentComponent },
  { path: 'student/update/:id', component: UpdateStudentComponent },
  { path: 'qrbanking', component: QrcodegenneratorComponent},
  { path: 'vote', component: ListmissComponent},
  { path: 'miss/add', component: AddmissComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
