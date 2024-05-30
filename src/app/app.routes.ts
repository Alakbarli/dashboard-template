import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'',
        component:DashboardComponent,
        children:[
            {
                path:'',
                redirectTo:'/main-page',
                pathMatch:'full'
            },
            {
                path:'main-page',
                component:MainPageComponent
            }
        ]
    }
];
