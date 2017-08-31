import {Injectable, Input, OnInit} from '@angular/core';
import {NavTab} from "./bottom-nav-item/nav-tab";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class BottomBarService implements OnInit{

  /**
   * Constant for configuration that will define the default color in case that any tab has the state active
   * on the beginning
   * @type {string}
   */
  DEFAULT_COLOR_WITHOUT_ACTIVE_TAB : string = "blue"

  /**
   * Constant for configuration that in case of not been true , will only show the text in case that
   * there less than 3 elements on the bottom bar , otherwise only the active nav item will have the text visible
   * @type {boolean}
   */
  SHOW_TEXT_IF_MORE_THAN_3_ELEMENTS : boolean ;

  /**
   * Variable use for known when there are more than 3 navs items
   * @type {boolean}
   */
  moreThan3Elements : boolean = false;

  /**
   * Array of NavTab that will be use in the bottom-bar
   */
  tabs: NavTab[];

  /**
   * Variable that represent the background Color of the bottom bar
   * @type {BehaviorSubject<String>}
   */
  backgroundColor :Subject<String> = new BehaviorSubject<String>("");

  /**
   * Auxiliar variable for keep track of the last nav item active
   * @type {any}
   */
  private auxOldTab : NavTab = null;

  constructor() {}

  ngOnInit(): void {}

  /**
   * This method needs to be call after the tabs are loaded into the service,
   * it will find the active nav item in case that exist , also will set the background color
   * to the one set on the active nav item , otherwise will use the default one
   */
  public initiateState(){

    //find if one tab should be active
    this.auxOldTab=this.tabs.find((tab) => {
      return tab.state == 'active'
    });

    this.moreThan3Elements = (this.tabs.length > 3) ? true : false;

    if(!this.SHOW_TEXT_IF_MORE_THAN_3_ELEMENTS){
      this.SHOW_TEXT_IF_MORE_THAN_3_ELEMENTS=false;
    }


    // try to find if one tab is active , for the case that one tab is conf as active in the start
    if(this.auxOldTab == null){
      this.backgroundColor.next(this.DEFAULT_COLOR_WITHOUT_ACTIVE_TAB);
    }else{
      this.backgroundColor.next(this.auxOldTab.backgroundColor);
    }

  }


  /**
   * Method use for change of active tab
   * @param tab that will be active
   */
  public changeState(tab:NavTab){

    //change old tab to inactive and active the new one
    if(this.auxOldTab){
      this.auxOldTab.state = 'inactive';
    }

    tab.state = (tab.state === 'active') ? 'inactive' : 'active';
    this.auxOldTab = tab;
  }

  /**
   * Set method for changing the color of the botton bar
   * @param color
   */
  public changeColor(color:string){
    this.backgroundColor.next(color);
  }

}
