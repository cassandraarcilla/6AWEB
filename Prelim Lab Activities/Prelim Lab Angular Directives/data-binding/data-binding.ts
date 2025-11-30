import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  title='Hello there';
  imageURL = "https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750";
  w = 100;
  h = 100;
  message = 'Data Binding Demonstration';
  description = 'Cute Cat';
  textColor="Blue";
  isHighlighted=true;

  yourName='';

  count = 0;
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }
}