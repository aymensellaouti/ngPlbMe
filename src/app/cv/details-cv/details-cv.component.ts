import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;

  constructor() {}
  /*
  Todos :
  0- Défnir la route associé à ce composant (done)
  01- Préparer les méthodes dans le service (done)
  /cv/4
  1- Récupérer le paramètre
  2- On doit aller voir le cvService pour qu'il nous cherche le cv via son id
     2-1 Si ok => Affiche
     2-2 Sinon (!ko) => Redirige
  3- Le boutton supprimer
    3-1 au click on appelle le service pour supprimer
    3-2 on redirige vers la liste des cvs
  */
}
