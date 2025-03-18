import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: ` <p>second works</p> `,
  styles: [``],
})
export class SecondComponent {
  acr = inject(ActivatedRoute);
  params = this.acr.snapshot.params;
  quelqueChose = this.params['quelquechose'];
  name = this.params['name'];
}
