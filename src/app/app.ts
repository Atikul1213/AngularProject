import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
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
