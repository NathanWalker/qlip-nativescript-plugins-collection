import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBadge } from '@demo/shared';
import {} from '@qlip/badge';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBadge {}
