import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsPolicies } from './terms-policies';

describe('TermsPolicies', () => {
  let component: TermsPolicies;
  let fixture: ComponentFixture<TermsPolicies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsPolicies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsPolicies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
