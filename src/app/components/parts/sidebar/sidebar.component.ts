import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule,SidebarItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  closeCallback(e:any): void {
     
  }
  items:MenuItem[]=[
    {
      label:"Test 1",
      icon:"home",
      children:[
        {
          label:"Test 1 child 1",
          link:"link1",
          icon:"home",
        },
        {
          label:"Test 1 child 2",
          icon:"local_post_office",
          children:[
            {
              label:"Test 1 child 2 child 1",
              link:"link2",
              icon:"home",
            },
            {
              label:"Test 1 child 2 child 2",
              link:"link3",
              icon:"home",
            }

          ]
        }
      ]
    },
    {
      label:"Test 2",
      icon:"local_post_office",
      children:[
        {
          label:"Test 2 child 1",
          link:"link4",
          icon:"home",
        },
        {
          label:"Test 2 child 2",
          icon:"local_post_office",
          children:[
            {
              label:"Test 2 child 2 child 1",
              link:"link5",
              icon:"home",
            },
            {
              label:"Test 2 child 2 child 2",
              link:"link6",
              icon:"home",
            }

          ]
        }
      ]
    },
    {
      label:"Form",
      icon:"border_color",
      children:[
        {
          label:"File input",
          icon:"insert_drive_file",
          link:"file-input"
        }
      ]
    }
  ]

  sidebarVisible: boolean = false;
}
export interface MenuItem{
  icon?:string;
  label:string;
  link?:string;
  children?:Array<MenuItem>;
}
