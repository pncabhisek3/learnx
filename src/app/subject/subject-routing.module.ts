import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddSubjectComponent } from "./add-subject/add-subject.component";
import { EditSubjectComponent } from "./edit-subject/edit-subject.component";

const subjectModuleRoutes : Routes = [
    {path:'subs', component: EditSubjectComponent}
    ,{path:'sub', component: AddSubjectComponent}
];

@NgModule({
    imports:[RouterModule.forChild(subjectModuleRoutes)],
    exports:[RouterModule]
})
export class SubjectRoutingModule{}