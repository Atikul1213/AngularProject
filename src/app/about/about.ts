import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  userName:string|null=null
  dept:string|null=null
  constructor(private route:ActivatedRoute) {

  }
  
  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('name');
    this.dept = this.route.snapshot.paramMap.get('Dept');

    var name = this.route.queryParams.subscribe(params => {
      let name = params['name'];
      let dept = params['Dept'];
    });


    this.route.data.subscribe(data => {
      let name = data['name'];
      let dept = data['Dept'];
    }); 
  }



}
