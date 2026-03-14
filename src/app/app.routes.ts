import { Routes } from '@angular/router';
import { DirectiveComponent } from './components/directive/directive.component';
import { VariablesComponent } from './components/variables/variables.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ApiCallComponent } from './components/api-call/api-call.component';
import { UserComponent } from './components/user/user.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';

export const routes: Routes = [
  {
    path:'directives',component:DirectiveComponent
  },
  {
    path:'variable', component:VariablesComponent
  },
  {
    path:'data-binding',component:DataBindingComponent
  },
  {
    path:'template-form', component: TemplateFormComponent
  },
  {
    path: 'api-call', component: ApiCallComponent
  },
  {
    path:'user',component:UserComponent
  },
  {
    path:'resource-api',component:ResourceApiComponent
  }
];
