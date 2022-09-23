import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormColorInputComponent } from './components/form-color-input/form-color-input.component';
import { FormInputNumberComponent } from './components/form-input-number/form-input-number.component';
import { FormTextInputComponent } from './components/form-text-input/form-text-input.component';
import { SmartpointIconComponent } from './components/smartpoint-icon/smartpoint-icon.component';

@NgModule({
  declarations: [
    FormColorInputComponent,
    FormInputNumberComponent,
    FormTextInputComponent,
    SmartpointIconComponent,
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [
    FormColorInputComponent,
    FormInputNumberComponent,
    FormTextInputComponent,
    SmartpointIconComponent,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
