import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
