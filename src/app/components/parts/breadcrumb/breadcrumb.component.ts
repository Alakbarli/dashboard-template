import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../core/services/breadcrumb.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink,MatIconModule,NgClass],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {

  @Input() customClass?:string;
  
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