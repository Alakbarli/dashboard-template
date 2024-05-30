import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

export const routes: Routes = [
    {
        path:'',
        component:PublicLayoutComponent,
        children:[
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            {
                path: 'login',
                component: LoginComponent,
                data: {},
              },
        ]
    },
    {
        path:'',
        component:DashboardComponent,
        data:{ breadcrumb: 'Dashboard' },
        children:[
            {
                path:'',
                redirectTo:'/main-page',
                pathMatch:'full'
            },
            {
                path:'main-page',
                component:MainPageComponent,
                data: { breadcrumb: 'ashboard' },
            }

            ,{
                path:'link1',
                component:MainPageComponent,
                data: { breadcrumb: 'dashboard11' },
            },
            {
                path:'link2',
                component:MainPageComponent
            },
            {
                path:'link3',
                component:MainPageComponent
            },
            {
                path:'link4',
                component:MainPageComponent
            },
            {
                path:'link5',
                component:MainPageComponent
            },
            {
                path:'link6',
                component:MainPageComponent
            }
        ]
    }
];
