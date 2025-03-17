import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  //Propriétés : état State
  name = 'First Component';
  //L'attribut qui représente l'affichage ou non du paragraphe
  isHidden = false;
  message = '';
  constructor() {
    // Plannifie l'appel de la callback chaque x ms
    // setInterval(() => {
    //   this.isHidden = !this.isHidden;
    // }, 3000);
  }
  //Méthodes : comportement Behaviour
  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
