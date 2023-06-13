import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { ListStudentsComponent } from './component/list-students/list-students.component';
import { UpdateStudentComponent } from './component/update-student/update-student.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { InputScoreComponent } from './component/input-score/input-score.component';
import { FilterPipe } from './filter.pipe';
import { AddpointComponent } from './component/addpoint/addpoint.component';
import { ListpostComponent } from './component/listpost/listpost.component';
import { AddpostComponent } from './component/addpost/addpost.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { StudentinfoComponent } from './component/studentinfo/studentinfo.component';
import { AddAccountComponent } from './component/add-account/add-account.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ScoreStatisticsComponent } from './component/score-statistics/score-statistics.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { EditscoreComponent } from './component/editscore/editscore.component';
import { EditScoreFilterPipe } from './editscorefilter.pipe';
registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentsComponent,
    UpdateStudentComponent,
    LoginComponent,
    AddpointComponent,
    ListpostComponent,
    AddpostComponent,
    InputScoreComponent,
    FilterPipe,
    EditScoreFilterPipe,
    StudentinfoComponent,
    AddAccountComponent,
    ListUserComponent,
    ScoreStatisticsComponent,
    EditscoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    AngularEditorModule,
    ImageCropperModule,
    CanvasJSAngularChartsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
