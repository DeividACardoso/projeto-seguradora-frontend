import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone-pipe/phone.pipe';
import { OnlyNumbersDirective } from './only_numbers/only-numbers.directive';
import { CpfPipe } from './cpf-pipe/cpf.pipe';
import { NumberMaskPipe } from './number-mask-pipe/number-mask.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    CpfPipe,
    OnlyNumbersDirective,
    NumberMaskPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OnlyNumbersDirective,
    PhonePipe,
    CpfPipe,
    NumberMaskPipe
  ]
})
export class SharedModule { }
