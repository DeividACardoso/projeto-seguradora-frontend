import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosDetalheComponent } from './veiculos-detalhe.component';

describe('VeiculosDetalheComponent', () => {
  let component: VeiculosDetalheComponent;
  let fixture: ComponentFixture<VeiculosDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiculosDetalheComponent]
    });
    fixture = TestBed.createComponent(VeiculosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
