import { Component } from '@angular/core';

@Component({
  selector: 'app-inc-dec-counter',
  imports: [],
  templateUrl: './inc-dec-counter.html',
  styleUrl: './inc-dec-counter.css',
})
export class IncDecCounter {
   count:number=0;
  Inc(){
    this.count+=1; 
  }
   Dec(){
    if(this.count>0)
      this.count-=1; 
  }
  Reset(){
    this.count=0; 
  }
  handleCounter(val:string){
    if(val=="minus" && this.count>0)
      this.count-=1;
    else if(val=="plus")
      this.count+=1;
    else if(val=="reset")
      this.count=0;
  }
}
