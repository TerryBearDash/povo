import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebchatPage } from './webchat.page';

describe('WebchatPage', () => {
  let component: WebchatPage;
  let fixture: ComponentFixture<WebchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebchatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
