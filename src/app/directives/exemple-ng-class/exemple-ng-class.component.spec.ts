import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleNgClassComponent } from './exemple-ng-class.component';

describe('ExempleNgClassComponent', () => {
  let component: ExempleNgClassComponent;
  let fixture: ComponentFixture<ExempleNgClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempleNgClassComponent]
    });
    fixture = TestBed.createComponent(ExempleNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
