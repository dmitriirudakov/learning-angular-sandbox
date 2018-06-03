import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsGridModule } from './reactive-forms-grid/reactive-forms-grid.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsGridModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
