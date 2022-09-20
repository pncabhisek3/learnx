import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditSubjectComponent } from './edit-subject/edit-subject.component';
import { SubjectRoutingModule } from './subject-routing.module';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditSubjectComponent,
    AddSubjectComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SubjectRoutingModule,
    FormsModule
  ],
  providers:[]
})
export class SubjectModule { }
