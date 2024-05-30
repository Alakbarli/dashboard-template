import { BreakpointObserver, BreakpointState, LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'
import { fromEvent, Observable, Subscription } from 'rxjs';
import { ScreenTypes } from '../../shared/const';
import { SidebarComponent } from '../parts/sidebar/sidebar.component';
import { NavbarComponent } from '../parts/navbar/navbar.component';
import { BreadcrumbComponent } from '../parts/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../parts/footer/footer.component';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    LayoutModule,MatSidenavModule,MatIconModule,
    SidebarComponent,NavbarComponent,BreadcrumbComponent,
    RouterOutlet,FooterComponent,NgIf,MatCardModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  width?: string;
  sidebarOpen: boolean = true;
  showMenuButton: boolean = false;
  screenType: string = ScreenTypes.desktop;
  sidebarMode: "over" | "push" | "side" = "side";
  sidebarBackdrop: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private breakpointObserver: BreakpointObserver,) {
    this.subscribeScreenSize();
  }

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {

  }
  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  toggleMenuMobile() {
    if (this.sidebarBackdrop) {
      this.toggleMenu();
    }
  }
  subscribeScreenSize() {
    this.breakpointObserver.observe([
      "(max-width: 576px)", "(max-width: 768px)", "(max-width: 991px)", "(max-width: 1200px)", "(min-width: 1200px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.breakpoints['(max-width: 576px)']) {
        this.screenType = ScreenTypes.mobile;
        this.sidebarMode = 'over';
        this.sidebarOpen = false;
        this.sidebarBackdrop = true;
        this.width = "90%";
      }
      else if (result.breakpoints['(max-width: 768px)']) {
        this.screenType = ScreenTypes.mobile;
        this.sidebarMode = 'over';
        this.sidebarOpen = false;
        this.sidebarBackdrop = true;
        this.width = "70%";
      }
      else if (result.breakpoints['(max-width: 991px)']) {
        this.screenType = ScreenTypes.tablet;
        this.sidebarOpen = false;
        this.sidebarMode = 'over';
        this.sidebarBackdrop = true;
        this.width = "50%";
      }
      else if (result.breakpoints["(max-width: 1200px)"]) {
        this.screenType = ScreenTypes.desktop;
        this.sidebarOpen = false;
        this.sidebarMode = 'push';
        this.sidebarBackdrop = true;
        this.width = "40%";
      }
      else {
        this.screenType = ScreenTypes.large;
        this.sidebarOpen = true;
        this.sidebarMode = 'side';
        this.sidebarBackdrop = false;
        this.width = "25%";
      }
    });
  }
  ngOnDestroy() {
  }
}
