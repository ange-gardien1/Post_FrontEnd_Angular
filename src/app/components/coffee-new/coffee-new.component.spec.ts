import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeNewComponent } from './coffee-new.component';

describe('CoffeeNewComponent', () => {
  let component: CoffeeNewComponent;
  let fixture: ComponentFixture<CoffeeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
