import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

class Product {
	id: number;
	name: string;
	count: number;
}

@Component({
	selector: 'app-reactive-forms-grid',
	templateUrl: './reactive-forms-grid.component.html',
	styleUrls: ['./reactive-forms-grid.component.scss']
})
export class ReactiveFormsGridComponent implements OnInit {

	public products: Product[] = [
		{ id: 1, name: 'Product 1', count: 1 },
		{ id: 2, name: 'Product 2', count: 2 },
		{ id: 3, name: 'Product 3', count: 3 }
	];
	public gridFormGroup: FormGroup;
	public total: number;

	constructor(private fb: FormBuilder) {
	}

	ngOnInit() {
		this.initForm();
		this.setRows();
		this.setTotal();
		this.subscribeTotalOnChange();
	}

	get rows(): FormArray {
		return this.gridFormGroup.get('rows') as FormArray;
	}

	private initForm(): void {
		this.gridFormGroup = this.fb.group({
			rows: this.fb.array([]),
		});
	}

	private setRows(): void {
		const productsFBs: FormGroup[] = this.products.map(product => this.fb.group({
			id: product.id,
			name: product.name,
			count: [product.count,
				Validators.compose([
					Validators.required,
					Validators.min(0),
					Validators.max(100)
				])
			]
		}));

		const productsFormArray: FormArray = this.fb.array(productsFBs);
		this.gridFormGroup.setControl('rows', productsFormArray);
	}

	private subscribeTotalOnChange(): void {
		this.gridFormGroup.get('rows').valueChanges.subscribe(() => this.setTotal());
	}

	private setTotal(): void {
		if (this.rows.valid) {
			this.total = this.rows.value.reduce((count, product) => count + product.count, 0);
		} else {
			this.total = null;
		}
	}
}
