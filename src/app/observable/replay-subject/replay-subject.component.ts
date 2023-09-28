import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent {
  userList1 = [ 'Angular-1', 'Angular-2' ];
  userList2 = [ 'Html-1', 'html-2' ];
  userList3 = [ 'JavaScript-1', 'JavaScript-2' ];

  // subscribeModes

  subscribeMode1: boolean = false
  subscribeMode2: boolean = false

  // Subscription

  Subscription1:Subscription | undefined;
  Subscription2: Subscription | undefined;

  constructor(public dU:DesignUtilityService) {

    this.dU.videoList.subscribe(res=>{
      console.log(res);
      this.userList1.push(res);
    })
   }

  onClick(vidoe:any){
    this.dU.videoList.next(vidoe.value);
  }


ngOnInit(){
  
}

  user2Subscribe(){
    console.log("click");
    if (this.subscribeMode1) {
      if (this.Subscription1) {
        this.Subscription1.unsubscribe();
      }
    }else{
  this.Subscription1 = this.dU.videoList.subscribe(res=>{  
    console.log(res);
    this.userList2.push(res);
  })
}
  
    
    this.subscribeMode1 = !this.subscribeMode1;
  }

  user3Subscribe(){
    console.log("click");
    this.subscribeMode2 = !this.subscribeMode2;
  }

}
