import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ProgramaCardComponent } from './programa-card/programa-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [],
  exports: [ReactiveFormsModule,
    CommonModule,
    FormsModule]
})
export class SharedModule { }
