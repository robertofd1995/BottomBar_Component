import {Component, Input, OnInit} from '@angular/core';

import {NavTab} from "../bottom-nav-item/nav-tab";
import {BottomBarService} from "../bottom-bar.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'bottom-nav',
  styleUrls: ['./bottom-bar.component.scss'],
  templateUrl: './bottom-bar.component.html',
})
export class BottomBarComponent implements OnInit{


  /**
   * Group of NavTab items that will be use for the bottom bar
   */
  @Input() tabs: NavTab[];

  @Input() initialColor : string;

  @Input() showTextInCaseMore3Elements : boolean;

  /**
   * Variable that will be use for set the color of the background
   */
  color:String;

  constructor(private bottonNavService : BottomBarService){
  }

  ngOnInit(): void {

    //load the tabs into the bottonNavService
    this.bottonNavService.tabs=this.tabs;

    if (this.initialColor){
      this.bottonNavService.DEFAULT_COLOR_WITHOUT_ACTIVE_TAB=this.initialColor;

    }

    if (this.showTextInCaseMore3Elements){
      this.bottonNavService.SHOW_TEXT_IF_MORE_THAN_3_ELEMENTS= this.showTextInCaseMore3Elements;
    }

    if (this.tabs.length == 0){
      console.warn('The component doesnt contain any NavTab Element ')
      this.bottonNavService.backgroundColor== new BehaviorSubject<String>("yellow");
    }else{
      this.bottonNavService.initiateState();
      this.bottonNavService.backgroundColor== new BehaviorSubject<String>(this.tabs[0].backgroundColor);
    }

    //Subscribe color variable to any change produce in the bottom service color variable
    this.bottonNavService.backgroundColor.subscribe((colorService) => {this.color=colorService;});
  }

}

