import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
ObsMsg:any;
  constructor(public designService:DesignUtilityService) { }

  ngOnInit()
  {

    // of 

    const Obs1 = of("Ankit","Gupta","Sir")

    Obs1.subscribe(res=>{
      console.log(res)
      this.designService.print(res, "elContainer")
    })
      const Obs2 = of({ a: "Ankit",b: "Gupta",c: "Sir"})
      Obs2.subscribe(res=>{
        console.log("ObsMsg =>" ,res)
        this.ObsMsg =  res;
    })


    // From 

    const Obs3 = from([ "Alex", "John", "Eliza" ])
    Obs3.subscribe(res=>{
      console.log(res)
      this.designService.print(res, "elContainer3")
    })


    // promise

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise Resolved")
      }, 2000)
    
    })

    const Obs4 = from(promise)
    Obs4.subscribe(res=>{
      console.log("From Promise  => " + res)
      this.designService.print(res, "elContainer4")
    })
    

  }

}


