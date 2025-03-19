import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { AuthService } from "src/app/auth/services/auth.service";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  /*
  Todos :
  0- Défnir la route associé à ce composant (done)
  01- Préparer les méthodes dans le service (done)
  /cv/4
  1- Récupérer le paramètre (done)
  2- On doit aller voir le cvService pour qu'il nous cherche le cv via son id (done)
     2-1 Si ok => Affiche (done)
     2-2 Sinon (!ko) => Redirige (done)
  3- Le boutton supprimer
    3-1 au click on appelle le service pour supprimer
    3-2 on redirige vers la liste des cvs
  */

  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  authService = inject(AuthService);
  cvService = inject(CvService);
  router = inject(Router);
  constructor() {
    const id = this.acr.snapshot.params['id'];
    //this.cv = this.cvService.findCvById(+id);
    this.cvService.getCvByIdFromApi(id).subscribe({
      next: (cv) => (this.cv = cv),
      error: () => {
        this.router.navigate([APP_ROUTES.cv]);
      },
    });
  }
  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCvByIdFromApi(this.cv.id).subscribe({
        next: () => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
