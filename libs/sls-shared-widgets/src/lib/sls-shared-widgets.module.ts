import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './widget/button/button.component';
import { CardComponent } from './widget/card/card.component';
import { NavComponent } from './widget/nav/nav.component';
import { CheckboxComponent } from './widget/checkbox/checkbox.component';
import { RadioComponent } from './widget/radio/radio.component';
import { IconComponent } from './widget/icon/icon.component';
import { AlertComponent } from './widget/alert/alert.component';
import { HeadingDirective } from './directive/heading/heading.directive';
import {SharedMaterialModule} from '@sls/shared-material'

@NgModule({
  imports: [
      CommonModule,

      SharedMaterialModule
  ],
  declarations: [
    ButtonComponent,
    CardComponent,
    NavComponent,
    CheckboxComponent,
    RadioComponent,
    IconComponent,
    AlertComponent,
    HeadingDirective
  ],
  exports: [
    ButtonComponent,
    HeadingDirective,
    CardComponent
  ]
})
export class SlsSharedWidgetsModule {}
