import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
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
import { InputScoreComponent } from './input-score/input-score.component';
import { FilterPipe } from './filter.pipe';
import { AddpointComponent } from './addpoint/addpoint.component';
import { ListpostComponent } from './listpost/listpost.component';
import { AddpostComponent } from './addpost/addpost.component';

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


  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
