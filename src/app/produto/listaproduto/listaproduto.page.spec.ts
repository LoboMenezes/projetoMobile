import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprodutoPage } from './listaproduto.page';

describe('ListaprodutoPage', () => {
  let component: ListaprodutoPage;
  let fixture: ComponentFixture<ListaprodutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaprodutoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaprodutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
