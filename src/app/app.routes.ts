import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { LoginComponent } from './login/login';
import { PageNotFoundComponent } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path:'about', component:AboutComponent, data:{name:'Atikul Islam', Dept:'CSE'}},
    {path:'login', component: LoginComponent},
    {path:'**',component:PageNotFoundComponent}
];
