import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroDetalheComponent } from './seguro-detalhe.component';

describe('SeguroDetalheComponent', () => {
  let component: SeguroDetalheComponent;
  let fixture: ComponentFixture<SeguroDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguroDetalheComponent]
    });
    fixture = TestBed.createComponent(SeguroDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
