import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroListagemComponent } from './seguro-listagem.component';

describe('SeguroListagemComponent', () => {
  let component: SeguroListagemComponent;
  let fixture: ComponentFixture<SeguroListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguroListagemComponent]
    });
    fixture = TestBed.createComponent(SeguroListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
