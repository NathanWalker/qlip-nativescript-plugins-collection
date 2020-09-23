import { Component, NgZone } from '@angular/core';
import { DemoSharedCheckbox } from '@demo/shared';
import {} from '@qlip/checkbox';

@Component({
	selector: 'demo-checkbox',
	templateUrl: 'checkbox.component.html',
})
export class CheckboxComponent {
	demoShared: DemoSharedCheckbox;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedCheckbox();
	}
}
