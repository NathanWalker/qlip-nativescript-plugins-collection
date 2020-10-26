import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedCheckbox } from '@demo/shared';
import {} from '@qlip/nativescript-checkbox';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedCheckbox {}
