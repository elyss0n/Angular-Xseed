import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { TextboxComponent } from './textbox/textbox.component';

const routes: Routes = [
  { path: 'funcionarios', component: EmployeeComponent },
  { path: 'adicionar', component: AddEmployeeComponent },
  { path: 'textbox', component: TextboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
