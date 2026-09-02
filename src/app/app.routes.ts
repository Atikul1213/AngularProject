import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';

export const routes: Routes = [
    {path:'about', component: AboutComponent},
    {path:'login', component: LoginComponent},
    {path:'contact', component:ContactComponent},
];
