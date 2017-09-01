# BottonBar Angular4 Component

This component try to fulfill the [material design specification](https://material.io/guidelines/components/bottom-navigation.html) of the bottom bar but as a angular component.

It works in all kind of screens

![use-example](https://user-images.githubusercontent.com/6787022/29973333-7eafd5a4-8f2f-11e7-935e-2047b26e063f.gif)

```html
<bottom-nav [tabs]="tabs" [initialColor]="'red'" [showTextInCaseMore3Elements]="true"></bottom-nav>
```

## Dependecies : 

Boostrap 4 , make sure boostrap is working


And add this in the head of your index.html

```html
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
```

## Installation
To install this library, run:

```bash
$ npm install bottombar-component --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install bottombar-component
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BottomBarComponent }  from './bottom-bar/bottom-bar.component';';

// Import your library
import { BottomBarModule } from 'bottombar-component';

@NgModule({
  declarations: [
    BottomBarComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    BottomBarModule
  ],
  providers: [],
  bootstrap: [BottomBarComponent]
})
export class AppModule { }
```

Prepare the nav-items you want to use in the botton-bar
 if we follow the specification we should use between 3 and 5 items.
 
 For creating the items , we have to create and array of [NavTab](#TODO_Add_link_to_file).
 
        export interface NavTab {
          title: string; //title of the item , example : 'facebook'
          icon: string;  //icon of the item , example :'fa-facebook'
          link: string;  // link to the route we want to go example :'/example'
          state:string;  // None or Only one of the components should have the state 'active'
          backgroundColor:string; // This is the background color that the bottonBar will have once the NavTab is press
        }
        
Once we have our Array of NavTabs prepare , we can procedure to use our component

Example :
    
    <router-outlet></router-outlet> <!-- Important , other wise the route won't work -->
    
    <bottom-nav [tabs]="OurTabsArray"></bottom-nav>

 And we are ready to go 😊 
 
 
### Configuration : 
 
Things can be configurated :

There exists this optional inputs for the component :

initialColor : string , this will be the initial color on case none active navTab is active

showTextInCaseMore3Elements : boolean , this variable will say when the text should be display in case the bottom bar contains more than 3 elements 
 

Example : 

    <router-outlet></router-outlet>
    <bottom-nav [tabs]="tabs" [initialColor]="'red'" [showTextInCaseMore3Elements]="true"></bottom-nav>



## Example :

Just download this repo , and try ng serve , the app appearing in the pics will be ready to use and see how the component works,
feel free to play with the code 😄 



## License

MIT © [Roberto Fernandez Diaz](mailto:robertofd1995@gmail.com)
