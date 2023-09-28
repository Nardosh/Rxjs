import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  name = new Subject<string>()

  videoList = new ReplaySubject<any>(2)

  

  constructor() { }

  print(val:any, containerId:any){
    let el = document.createElement("li");
    el.innerText = val

    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(el);
    }
  
  }
  
}
