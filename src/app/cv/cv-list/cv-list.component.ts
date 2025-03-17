import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css'],
})
export class CvListComponent {
  @Input()
  cvs: Cv[] = [];
  @Output()
  forwardCv = new EventEmitter<Cv>()


  onForwardCv(cv: Cv) {
    this.forwardCv.emit(cv);
  }
}
