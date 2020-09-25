import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BadgeComponent } from './badge.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BadgeComponent }])],
	declarations: [BadgeComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class BadgeModule {}
