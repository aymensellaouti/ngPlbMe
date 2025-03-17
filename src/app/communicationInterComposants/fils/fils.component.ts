import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input()
  messageDePapa = "je n'ai pas encore reçu de message";

  // créer un event customisé et on l'emmetra au besoin avec la
  // data
  @Output()
  sendMessageToDad = new EventEmitter<string>();

  sendMessage() {
    this.sendMessageToDad.emit('salut papa tout va très bien');
  }
}
