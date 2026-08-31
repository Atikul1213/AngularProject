import { Component } from '@angular/core';

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
}
