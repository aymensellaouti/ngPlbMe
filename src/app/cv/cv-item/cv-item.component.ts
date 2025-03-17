import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent {
  // Je défini mon state ce que ma vue gére
  @Input({required: true})
  cv!: Cv;
}
