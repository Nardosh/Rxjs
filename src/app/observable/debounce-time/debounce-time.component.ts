import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinct, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements AfterViewInit {

 @ViewChild('myInput') myInput:ElementRef | undefined;
 reqData = null;

  constructor() { }

  ngAfterViewInit(): void {
   
    const source = fromEvent<any>(this.myInput?.nativeElement,'keyup').pipe(
      map(event=>event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    )

    source.subscribe(res=>{
      console.log(res);
      this.reqData = res;

      setTimeout(() => {
        this.reqData = null;

      },1000)
    
    })

  }
  loadingBar() {
    throw new Error('Method not implemented.');
  }

} 
