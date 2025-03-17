import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs: Cv[] = [
    new Cv(
      1,
      'Raux',
      'Florian',
      'Dev',
      '1234',
      20,
      'rotating_card_profile3.png'
    ),
    new Cv(
      2,
      'Penhoat',
      'Christine',
      'Dev',
      '12345',
      20,
      'rotating_card_profile.png'
    ),
  ];
  /**
   * Représente le cv sélectionné
   */
  selectedCv: Cv | null = null;

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
