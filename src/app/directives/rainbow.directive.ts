import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  // Quels attributs je veux gérer
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  // Quels comportement je veux gérer
  @HostListener('keyup') onKeyUp() {
    this.color = this.getRandomColor();
    this.bc = this.getRandomColor();
  }
  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
