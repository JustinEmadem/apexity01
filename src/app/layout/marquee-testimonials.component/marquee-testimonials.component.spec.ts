import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeTestimonialsComponent } from './marquee-testimonials.component';

describe('MarqueeTestimonialsComponent', () => {
  let component: MarqueeTestimonialsComponent;
  let fixture: ComponentFixture<MarqueeTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueeTestimonialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueeTestimonialsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
