import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);
  // counter = 5;
  constructor() {
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      // Je décris coment je crée mon flux
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    // 1ere inscription
    this.myObservable$.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    // setTimeout(() => {
    // 2éme inscription
    this.myObservable$
    .pipe(
      // 5 4 3 2 1
      map((valeur) => valeur * 3)
      // 15 12 9 6 3
    )
    .subscribe({
      next: (val) => {
        this.toastr.info('' + val);
      },
      complete: () => {
        this.toastr.error("C'est la fin !!!!!!");
      },
    });
    // }, 3000)
    // 3ere inscription
    // this.myObservable$.subscribe({
    //   next: (val) => {
    //     this.counter = val;
    //   },
    // });
  }
}
