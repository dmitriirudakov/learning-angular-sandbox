import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsGridComponent } from './reactive-forms-grid.component';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	declarations: [ReactiveFormsGridComponent],
	exports: [ReactiveFormsGridComponent]
})
export class ReactiveFormsGridModule {
}
