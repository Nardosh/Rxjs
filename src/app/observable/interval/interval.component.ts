import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit
{

  obsMsg:any;
  videoSubscription: Subscription | undefined

  constructor(public designService:DesignUtilityService)
  {
  }

  ngOnInit()
  {
  //  const broadCastVideo = interval(1000);
  // timer(delay, interval);
   const broadCastVideo = timer(3000, 1000);
   this.videoSubscription = broadCastVideo.subscribe(data=>{
     console.log("video ", data);
     this.obsMsg = "video " + data;
     this.designService.print(this.obsMsg,'elContainer');
     this.designService.print(this.obsMsg,'elContainer2');
     this.designService.print(this.obsMsg,'elContainer3');


     if(data >=5 && this.videoSubscription != undefined)
     {
       this.videoSubscription.unsubscribe();
     }
  
   })

 

  }

}



