import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
import { EditComponent } from './edit/edit.component';
import { AdmindashComponent } from './admindash/admindash.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'feedback',component:FeedbacksComponent},
  {path:'addfeedback',component:AddfeedbackComponent},
  {path:'update/:id',component:EditComponent},
  {path:'admindash',component:AdmindashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
