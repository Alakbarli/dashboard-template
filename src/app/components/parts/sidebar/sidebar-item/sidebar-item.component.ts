import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from '../sidebar.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [NgFor,NgClass,NgIf,RouterLink,MatIconModule],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {
  constructor(private router: Router) {
  }
  toggle(e:Event,index:number){
    const element=e.currentTarget as HTMLElement;
    const sibbblings=element.parentElement?.parentElement?.children;
    if(sibbblings){
      for(let i=0;i<sibbblings?.length;i++){
        if(i!=index){
          console.log(1)
          sibbblings.item(i)?.classList.remove('active')
        }
      }
    }
    element.parentElement?.classList.toggle("active");
  }
  @Input() items:MenuItem[]=[];
  @Input() depth: number = 0;

  currentUrl?: string;
  trackById(index: number, item: MenuItem): string {
    return item.label;
  }
  isActive(item: MenuItem): boolean {
    const currentUrl = this.router.url;
    if (item.link && currentUrl.includes(item.link)) {
      return true;
    }
    if (item.children) {
      return item.children.some(child => this.isActive(child));
    }
    return false;
  }
}
