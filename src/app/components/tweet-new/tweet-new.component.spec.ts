import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTweetComponent } from './tweet-new.component';

describe('TweetNewComponent', () => {
  let component: NewTweetComponent;
  let fixture: ComponentFixture<NewTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
