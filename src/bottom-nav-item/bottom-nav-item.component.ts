import {Component, Input, OnInit} from '@angular/core';
import {NavTab} from "./nav-tab";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {BottomBarService} from "../bottom-bar.service";

@Component({
  selector: 'bottom-nav-item',
  templateUrl: './bottom-nav-item.component.html',
  styleUrls: ['./bottom-nav-item.component.scss'],
  animations : [
    trigger('focusState', [ //animations for the transition between active and inactive
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        cursor: 'pointer',
        color: '#FFFFFF',
        transform: 'scale(1.08)',
        padding: '9px',
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class BottomNavItemComponent implements OnInit {

  @Input() tab: NavTab;

  constructor(public bottomNavService:BottomBarService) {
  }

  ngOnInit() { }

  /**
   * Method that will change of active tab
   * @param tab
   */
  private changeState(tab:NavTab){
    this.bottomNavService.changeState(tab);
    this.bottomNavService.changeColor(tab.backgroundColor);
  }


}
