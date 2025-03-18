import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  // providers: [SayHelloService]
})
export class CvComponent {
  today = new Date();
  toastr= inject(ToastrService);
  cvs: Cv[] = [
    new Cv(1, 'Raux', 'Florian', 'Dev', '1234', 20, ''),
    new Cv(2, 'Penhoat', 'Christine', 'Dev', '12345', 20, '    '),
    new Cv(
      3,
      'Lacquehay',
      'Laurie',
      'Dev',
      '12345',
      20,
      'rotating_card_profile.png'
    ),
  ];
  loggerService = inject(LoggerService);
  //  Donne moi le sayHelloService
  sayHelloService = inject(SayHelloService);

  //sayHelloService = new SayHelloService();
  constructor() //private loggerService: LoggerService // Donne moi le LoggerService
  {
    this.sayHelloService.hello();
    this.loggerService.logger('cc je suis le cv Component');
    this.toastr.success('Bienvenu dans notre cvTech')
  }
  /**
   * Représente le cv sélectionné
   */
  selectedCv: Cv | null = null;
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
