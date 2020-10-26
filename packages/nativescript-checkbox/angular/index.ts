import { Directive, ElementRef, forwardRef, HostListener, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { registerElement, BaseValueAccessor } from '@nativescript/angular';
import { View } from '@nativescript/core';
import { CheckBox } from '@qlip/nativescript-checkbox';

registerElement('Checkbox', () => CheckBox);

const CHECKBOX_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => CheckBoxValueAccessor),
	multi: true,
};

export type CheckableView = { checked: boolean } & View;

/**
 * The accessor for setting checked property and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <CheckBox [(ngModel)]="model.test">
 *  ```
 */
@Directive({
	selector: 'CheckBox[ngModel], CheckBox[formControlName], CheckBox[formControl], checkBox[ngModel], checkBox[formControlName], checkBox[formControl], check-box[ngModel], check-box[formControlName], check-box[formControl]',
	providers: [CHECKBOX_VALUE_ACCESSOR],
})
export class CheckBoxValueAccessor extends BaseValueAccessor<CheckableView> {
	constructor(elementRef: ElementRef) {
		super(elementRef.nativeElement);
	}

	@HostListener('checkedChange', ['$event'])
	public checkedChangeListener(event: any) {
		this.onChange(event.value);
	}

	public onTouched = () => {};

	public writeValue(value: any): void {
		this.view.checked = value;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}
}
@NgModule({
	declarations: [CheckBoxValueAccessor],
	providers: [],
	imports: [],
	exports: [CheckBoxValueAccessor],
})
export class NativeScriptCheckboxModule {}
