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
  toggle(e:Event){
    const element=e.currentTarget as HTMLElement;
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
