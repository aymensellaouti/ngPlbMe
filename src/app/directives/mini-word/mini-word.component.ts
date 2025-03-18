import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  // conseil 1 : utilisez ngStyle
  // conseil 2 : utilisez [(ngModel)]
  // La définition de notre état
  color = 'red';
  size = 75;
  police = 'garamond';

}
