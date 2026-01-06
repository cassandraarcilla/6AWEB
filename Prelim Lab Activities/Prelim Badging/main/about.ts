import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  showMore = false;

  toggleInfo() {
    this.showMore = !this.showMore;
  }

  get buttonText(): string {
    return this.showMore ? 'Show Less' : 'Learn More';
  }
}
