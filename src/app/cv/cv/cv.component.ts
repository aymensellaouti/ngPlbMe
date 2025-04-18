import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  // providers: [SayHelloService]
})
export class CvComponent {
  today = new Date();
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  cvs: Cv[] = [];
  loggerService = inject(LoggerService);
  //  Donne moi le sayHelloService
  sayHelloService = inject(SayHelloService);

  //sayHelloService = new SayHelloService();
  constructor(
    // private cvService:CvService
  ) {
    //private loggerService: LoggerService // Donne moi le LoggerService
    this.sayHelloService.hello();
    this.loggerService.logger('cc je suis le cv Component');
    this.toastr.success('Bienvenu dans notre cvTech');
    this.cvService.selectedCv$.subscribe({
      next: cv => this.selectedCv = cv
    });
    this.cvService.getCvsFromApi().subscribe({
      next: (cvsFromApi) => {
        this.cvs = cvsFromApi;
      },
      error: (error) => {
        this.cvs = this.cvService.getCvs();
        this.toastr.error("Faites attention les données sont fictives, veuillez contacter l'admin")
      }
    })
  }
  /**
   * Représente le cv sélectionné
   */
  selectedCv: Cv | null = null;
  // onForwardCv(cv: Cv) {
  //   this.selectedCv = cv;
  // }
}
