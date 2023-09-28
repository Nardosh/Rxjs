import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {
  constructor(public designService: DesignUtilityService) { }
  
  techStatus:any;

  ngOnInit(): void {
  
    const observable = new Observable(observer => {
   
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('React');
      }, 2000);
      setTimeout(() => {
        observer.next('Html & CSS');
        observer.error(new Error('Error Occured'));
      }, 3000);
      setTimeout(() => {
        observer.next('JavaScript');

      }, 4000);
      setTimeout(() => {
        observer.next('pHp');
      }, 5000);

    })

    observable.subscribe(res=>{
      console.log(res);
      this.designService.print(res, 'elContainer');
    
    },
    err=>{
      this.techStatus = 'error';

    },
    ()=>{
      this.techStatus = 'completed';

    }
    )
    


  }


}
