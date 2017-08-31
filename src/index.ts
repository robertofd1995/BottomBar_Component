import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


import {BottomBarComponent} from './bottom-bar/bottom-bar.component';
import {BottomNavItemComponent} from './bottom-nav-item/bottom-nav-item.component';
import {IconComponent} from './icon/icon.component'

import {BottomBarService} from "./bottom-bar.service";

export {NavTab} from './bottom-nav-item/nav-tab';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
      BottomBarComponent,
      BottomNavItemComponent,
      IconComponent,

  ],
  exports: [
    BottomBarComponent,
    BottomNavItemComponent,
    IconComponent
  ]
})
export class BottomBarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BottomBarModule,
      providers: [BottomBarService]
    };
  }
}
