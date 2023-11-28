import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosListagemComponent } from './veiculos-listagem.component';

describe('VeiculosListagemComponent', () => {
  let component: VeiculosListagemComponent;
  let fixture: ComponentFixture<VeiculosListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiculosListagemComponent]
    });
    fixture = TestBed.createComponent(VeiculosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
