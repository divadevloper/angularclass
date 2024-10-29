import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionthreeComponent } from './sectionthree.component';

describe('SectionthreeComponent', () => {
  let component: SectionthreeComponent;
  let fixture: ComponentFixture<SectionthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionthreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
