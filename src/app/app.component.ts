import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  handleIncrement = () => {
    console.log(this.count);
    
    this.count < 10 ? (this.count += 1 ): 10;
  };
  handleDecrement = () => {
    this.count > 0 ? (this.count -= 1) : 0;
  };
  handleReset = () => {
    this.count = 0;
  };
}
