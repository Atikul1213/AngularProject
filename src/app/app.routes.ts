import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { LoginComponent } from './login/login';
import { ContactComponent } from './contact/contact';
import { PageNotFoundComponent } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path:'about', component:AboutComponent},
    {path:'login', component: LoginComponent},
    {path:'contact', component:ContactComponent},
    {path:'**',component:PageNotFoundComponent}
];
