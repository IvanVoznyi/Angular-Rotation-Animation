import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatePulsingAnimationComponent } from './rotate-pulsing-animation.component';

describe('RotatePulsingAnimationComponent', () => {
  let component: RotatePulsingAnimationComponent;
  let fixture: ComponentFixture<RotatePulsingAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotatePulsingAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatePulsingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
