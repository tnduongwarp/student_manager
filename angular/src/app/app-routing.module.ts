import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { ListStudentsComponent } from './component/list-students/list-students.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { UpdateStudentComponent } from './component/update-student/update-student.component';
import { AddpointComponent } from './component/addpoint/addpoint.component';
import { AddpostComponent } from './component/addpost/addpost.component';
import { InputScoreComponent } from './component/input-score/input-score.component';
import { ListpostComponent } from './component/listpost/listpost.component';
import { PostComponent } from './component/post/post.component';
import { StudentinfoComponent } from './component/studentinfo/studentinfo.component';
import { AddAccountComponent } from './component/add-account/add-account.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { ScoreStatisticsComponent } from './component/score-statistics/score-statistics.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'sysadmin/account/list', component: ListUserComponent},
  { path: 'student/list', component: ListStudentsComponent },
  { path: 'student/add', component: AddStudentComponent },
  { path: 'student/update/:id', component: UpdateStudentComponent },
  { path: 'score/list', component: InputScoreComponent},
  { path: 'score/add/:id', component: AddpointComponent},
  { path: 'post/list', component: ListpostComponent},
  { path: 'post/add', component: AddpostComponent},
  { path: 'post/:id', component: PostComponent},
  { path: 'myinfo', component: StudentinfoComponent},
  { path: 'sysadmin/account/add', component: AddAccountComponent},
  { path: 'score/statistic', component: ScoreStatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
