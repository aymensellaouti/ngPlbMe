import { Component } from '@angular/core';

@Component({
  selector: 'app-exemple-ng-class',
  templateUrl: './exemple-ng-class.component.html',
  styleUrls: ['./exemple-ng-class.component.css']
})
export class ExempleNgClassComponent {
  /**
   * Représente le fait que la lampe soit allumée ou éteinte
   */
  isOn = false;

  interrupteur() {
    this.isOn = !this.isOn;
  }
}
