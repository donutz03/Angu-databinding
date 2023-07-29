//Bootstrapping

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);

//bootstraps app using the root component from the specified NgModule

//NGMODULES
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        MyRedComponent,
        MyBlueComponent,
        MyDatePipe
    ],
    imports:  [
        BrowserModule,
        SomeOtherModule
    ]
    exports: [
        MyRedComponent,
        MyDatePipe
    ]
    providers: [
        MyService,
        { provide: }
    ]
    bootstrap: [MyAppComponent]
})

class MyModule {}



//Template Syntax
<input [value]="firstName">

<div [attr.role]="myAriaRole">

<div [Style.width.px]="mySize">

<button (click)="readRainbow($event)">

<div title="Hello {{ponyName}}"> 

<div [title]="'Hello " + ponyName">

<p>
    Hello {{ponyName}}
</p>

<my-cmp [(title)]="name">

<my-cmp [title]="name" (titleChange)="name=$event">

<video #movieplayer ...></video>
<button (click)="movieplayer.play()">
    Play
</button>

<p *myUnless="myExpression">
    ...

</p>

<ng-template [myUnless]="myExpression">
  <p>
    ...MyModule
  </p>
</ng-template>

<p>
  Card Node.: {{cardNumber | myCardNumberFormatter}}
</p>

<p>
  Employer: {{employer?.companyName}}
</p>

<svg:rect x="0"
          y="0"
          width="100"
          height="100"/>

<svg>
  <rect x="0"
  y="0"
  width="100"
  height="100"/>
</svg>

import {CommonModule} from '@angular/common'

<section *ngIf="showSection">

<li *ngFor="let item of list">

<div [ngSwitch]="conditionExpression">

  <ng-template [ngSwitchCase]="case1Exp">
    ...
  </ng-template>
  <ng-template ngSwitchCase="case2LiteralString">
    ...
  </ng-template>
  <ng-template ngSwitchDefault>
    ...
  </ng-template>
</div>

<div [ngClass]="{'active': isActive,
                 'disabled': isDisabled}">

<div [ngStyle]="{'property': 'value'}">
<div [ngStyle]="dynamicStyles()">

import { FormsModule } from '@angular/forms'

<input [(ngModel)]="useName">

import { Directive, ... } from '@angular/core';

@Component({...})
class MyComponent() {}

