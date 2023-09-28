import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, pipe, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {


  subSource: Subscription | undefined;

users = [
  {name: "Abishek", skil: "PHP" },
  {name: "Ankit sir", skil: "Angular"},
  {name: "Amit sir", skil: "PHP" },
]

  ngOnInit(): void {
  
    // example no. 1 

  const source = interval(100);
    this.subSource = source.pipe(
      take(5),
      toArray()
    )
    .subscribe(res=>{
      // console.log("example no. 1 => " + res)
    }
      )



  // example no. 2     

  // const source2 = from(this.users);
  // source2.subscribe(res=>{
  //   console.log("example no. 2 => " , res)
  // })
  const source2 = from(this.users);
   source2.pipe(
    toArray()
  )
  .subscribe(res=>{
    console.log("example no. 2.1 => " , res)
  
  })
  
// example no. 3

const source3 = of("druva", "ravi", "sai", "sumanth");
source3.pipe(toArray())
.subscribe(res=>{
  console.log("example no. 3 => " , res)
})





  }

  
}
