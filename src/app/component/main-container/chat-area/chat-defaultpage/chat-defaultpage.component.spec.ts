import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDefaultpageComponent } from './chat-defaultpage.component';

describe('ChatDefaultpageComponent', () => {
  let component: ChatDefaultpageComponent;
  let fixture: ComponentFixture<ChatDefaultpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatDefaultpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDefaultpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
