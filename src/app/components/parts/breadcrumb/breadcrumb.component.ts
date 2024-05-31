import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../core/services/breadcrumb.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: Array<{ label?: any, url?: any }> = [];

  constructor(private breadcrumbService: BreadcrumbService,private cd:ChangeDetectorRef) {}

  ngOnInit(): void {
    
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
    this.breadcrumbService.subject.subscribe({
      next:res=>{
        this.breadcrumbs=res;
        //console.log(res)
      }
    })
   // console.log(1)
   // this.cd.detectChanges()
    //console.log(this.breadcrumbs)
  }
}