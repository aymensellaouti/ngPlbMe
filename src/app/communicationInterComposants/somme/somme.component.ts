import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-somme',
  templateUrl: './somme.component.html',
  styleUrls: ['./somme.component.css']
})
export class SommeComponent {
  @Input({required:true})
  x = 0;
  @Input()
  y = 0;
}
