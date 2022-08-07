import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeConstants } from './constants/route-constants';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: routeConstants.login, component: LoginComponent }, 
  { path: routeConstants.register, component: RegisterComponent },
  { path: routeConstants.portfolio, component: PortfolioComponent }, 
  { path: '**', component: PortfolioComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
