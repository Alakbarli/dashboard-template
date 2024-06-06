import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  requestProgress:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  constructor() { }
  show(){
    this.requestProgress.next(true);
  }
  hide(){
    this.requestProgress.next(false);
  }
}
