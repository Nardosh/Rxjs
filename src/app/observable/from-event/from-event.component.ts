import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit {
constructor(public designService: DesignUtilityService) { }

  @ViewChild('addbtn') addbtn:ElementRef | undefined;

  ngAfterViewInit(): void {
    let count = 1
    if (this.addbtn) {
    fromEvent(this.addbtn.nativeElement, "click").subscribe(res=>{
      let countVal = "video"+ count++
      console.log(countVal)
      this.designService.print(countVal, "elContainer")
      this.designService.print(countVal, "elContainer2")
  
    })
  }
}

 


}
