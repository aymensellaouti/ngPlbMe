import { Component } from '@angular/core';

@Component({
  selector: 'app-rotating-card',
  templateUrl: './rotating-card.component.html',
  styleUrls: ['./rotating-card.component.css'],
})
export class RotatingCardComponent {
  // Définir le state du composant : L'ensemble des attributs
  // qui permettent de décrire ma vue
  name = 'sellaouti';
  firstname = 'aymen';
  job = 'teacher';
  path = 'rotating_card_profile.png';
}
