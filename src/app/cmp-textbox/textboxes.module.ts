import { NgModule } from '@angular/core';
import { DxTextBoxModule } from 'devextreme-angular';

import { CmpTextboxComponent } from './cmp-textbox.component';

@NgModule({
  imports: [
    DxTextBoxModule
  ],
  exports: [
    CmpTextboxComponent
  ],
  declarations: [
    CmpTextboxComponent
  ],
})
export class TextboxesModule { }
