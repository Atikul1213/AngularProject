import { Component, signal , effect, WritableSignal, computed} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-event-trigger',
  imports: [FormsModule, NgFor, NgIf, NgSwitchCase, NgSwitch,NgSwitchDefault],
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

   data: WritableSignal<number | string>  = signal<number|string>(10);
   UpdateData(){
      this.data.set("Atikul Islam");
   }
   
   a=signal(10);
   b = signal(20);
   sum = computed(() => this.a() + this.b());

   showSum(){
    alert("before Sum: "+this.sum());
    this.a.set(100);
    alert("after sum: "+this.sum());
   }

   userName = signal("Atikul Islam");
   constructor1(){
      effect(()=>{
        alert("User name: "+this.userName()); 
      })
   }
    
  

   arr=[10,20,30,40,50,60,70,80,90,100];
   

   email="default@gmail.com"
   
   changeEmail(event:any){
      this.email = event.target.value;
   }
   



   task="";
   taskList:{id:number, task:string}[]=[];
   addTask(){
    this.taskList.push({
      id:this.taskList.length+1, task: this.task
    });
    this.task="";
   }

   removeTask(id:number){
    this.taskList = this.taskList.filter((item)=>item.id != id);
   }

   bgColor="red";
  

   students=[{name: "Atikul Islam", age: 25}, 
    {name: "John Doe", age: 30}, {name: "Jane Smith", age: 28}, 
    {name: "Michael Johnson", age: 35}, {name: "Emily Davis", age: 22}];

   

   showNgIf = true;
   login = false;
   block = 0;
   
   updateBlock(){
    if(this.block >= 2) this.block = 0;
    else this.block++;
   }
  
   color2="green";








}
