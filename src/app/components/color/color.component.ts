import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  // Quels propriété je dois avoir pour gérer ma vue
  defaultColor = 'red';
  /**
   * Représente la couleur du background
   */
  bgColor = this.defaultColor;

  // Changer la couleur du background
  changeColor(color: string) {
    this.bgColor = color;
  }

  reset() {
    this.bgColor = this.defaultColor;
  }
}
