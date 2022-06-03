import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Example Interpolation 
  title = 'Angular Workout';
  getValforInterpolation(){
    return 'This value comes from function interpolation()'
  };
  exForCalculation = 12;
  exForClass="clstest";
}
