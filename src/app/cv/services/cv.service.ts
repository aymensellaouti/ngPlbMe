import {  Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs = [
    new Cv(1, 'Raux', 'Florian', 'Dev', '1234', 20, ''),
    new Cv(2, 'Penhoat', 'Christine', 'Dev', '12345', 20, '    '),
    new Cv(
      3,
      'Lacquehay',
      'Laurie',
      'Dev',
      '123457',
      20,
      'rotating_card_profile.png'
    ),
    new Cv(
      4,
      'NGBATALA',
      'Hocine',
      'Dev',
      '123458',
      20,
      'rotating_card_profile2.png'
    ),
    new Cv(
      5,
      'PERROT',
      'Thomas',
      'Dev',
      '123459',
      20,
      'rotating_card_profile3.png'
    ),
    new Cv(6, 'OFFREDI', 'Camille', 'Dev', '12345688', 20, ''),
    new Cv(7, 'PERRIER', 'Laurent', 'Dev', '12345699', 20, ''),
  ];
  /**
   * C'est le flux des cvs sélectionnés
   * Exemple Cv1, Cv3, Cv7, .....
   */
  #selectCvSubject$ = new Subject<Cv>();

  selectedCv$ = this.#selectCvSubject$.asObservable();
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  /**
   * Ajouter un cv dans le flux des cvs sélectionnés
   * @param cv
   */
  selectCv(cv: Cv) {
    this.#selectCvSubject$.next(cv);
  }

}
