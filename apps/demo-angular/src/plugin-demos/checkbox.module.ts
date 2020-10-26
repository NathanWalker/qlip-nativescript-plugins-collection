import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { CheckboxComponent } from './checkbox.component';
import { NativeScriptCheckboxModule } from '@qlip/nativescript-checkbox/angular';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptCheckboxModule, NativeScriptRouterModule.forChild([{ path: '', component: CheckboxComponent }])],
	declarations: [CheckboxComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class CheckboxModule {}
