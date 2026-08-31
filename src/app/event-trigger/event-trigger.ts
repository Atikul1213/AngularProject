import { Component, signal , effect} from '@angular/core';

@Component({
  selector: 'app-event-trigger',
  imports: [],
  templateUrl: './event-trigger.html',
  styleUrl: './event-trigger.css',
})
export class EventTrigger {
  name:string="Atikul Islam"
  displayName=""

  getName(event:any){
    var value = event.target.value;
    //alert("Event value: "+value);
    this.name = value;
  }

  showName(){
    this.displayName = this.name;
  }

  handleEvent(event:any){
      alert("Event type: "+event.type);
  }

  display = true;
  onChange(){
    this.display = !this.display;
  }

  changeColor = false
   toggleColor(){
    this.changeColor = !this.changeColor;
   }


   color = 1
    changeColorBtn(){
      if(this.color >=3) this.color = 1;
      else this.color++;
    }

  users = [
    {name: "Atikul Islam", age: 25},
    {name: "John Doe", age: 30},
    {name: "Jane Smith", age: 28},
    {name: "Michael Johnson", age: 35},
    {name: "Emily Davis", age: 22}
  ]
   
  getStudentName(name:string){
    alert("Student name: "+name);
  }

  count=signal(10);
  x = 5;
  
  constructor(){
    effect(()=>{
      alert("count value: "+this.count());  
    })
  }
  updateValue(opt:string){
    if(opt=="inc"){
        this.count.set(this.count() + 1);
        this.x = this.x + 1;
    }
    else{
        this.count.set(this.count() - 1);
        this.x = this.x - 1;
    }
  }


}
