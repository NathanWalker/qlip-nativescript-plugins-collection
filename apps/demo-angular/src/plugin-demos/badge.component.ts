import { Component, NgZone } from '@angular/core';
import { DemoSharedBadge } from '@demo/shared';
import {} from '@qlip/badge';

@Component({
	selector: 'demo-badge',
	templateUrl: 'badge.component.html',
})
export class BadgeComponent {
	demoShared: DemoSharedBadge;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedBadge();
	}
}
