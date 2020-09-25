import { DemoSharedBase } from '../utils';
import { setBadge } from '@qlip/badge';

export class DemoSharedBadge extends DemoSharedBase {
	testIt() {
		setBadge(5);
	}
}
