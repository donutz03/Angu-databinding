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

@Directive({...})
class MyDirective() {}

@Pipe
class MyPipe() {}

@Injectable
class MyService() {}

@Directive({
  property1: value1,
  ...
})

selector: '.cool-button:not(a)'

providers: [
  MyService,
  { provide: ... }
]


-----------------AICI AM RAMAS, DE AICI NU AM MAI SCRIS ------------------------------
viewProviders: [MyService, { provide: ... }]

template: 'Hello {{name}}'
templateUrl: 'my-component.html'

styles: ['.primary {color: red']
styleUrls: ['my-component.css']

import { Input, ... } from '@angular/core'

@Input() myProperty;

@Output() myEvent = new EventEmitter();

@HostBinding('class.valid') isValid;

@HostListener('click', ['$event']) onclick(e) {...}

@ContentChild(myPredicate) myChildComponent;

@ContentChildren(myPredicate) myChildComponents;

@ViewChild(myPredicate) myChildComponent;

@ViewChildren(myPredicate) myChildComponents;

constructor(myService: MyService, ...) { ... }

ngOnChanges(changeRecord) { ... }

ngOnInit() { ... }

ngDoCheck() { ... }

ngAfterContentInit() { ... }

ngAfterContentChecked() { ... }

ngAfterViewInit() { ... }

ngOnDestroy() { ... }

{ provide: MyService, useFactory: myFactory }

{ provide: myValue, useValue: 41 }

import { Routes, RouterModule, ... } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'path/:routeParam', component: MyComponent },
  { path: 'staticPath', component: ... },
  { path: '**', component: ... }
  { path: 'oldPath', redirectTo: '/staticPath' },
  { path: ..., component: ..., data: { message: 'Custom' } }
];

const routing = RouterModule.forRoot(routes);

<router-outlet></router-outlet>
<router-outlet name="aux"></router-outlet>

<a routerLink="/path">
<a [routerLink]="[ '/path', routeParam ]">

<a [routerLink]="[ '/path', { matrixParam: 'value' } ]">

<a [routerLink]="[ '/path' ]" [queryParams]="{ page: 1 }">

<a [routerLink]="[ '/path' ]" fragment="anchor">

<a [routerLink]="['/path']" routerLinkActive="active" 
ariaCurrentWhenActive="page">

function canActivateGuard: CanActivateFn = 
  (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshoto
  ) => { ... }

  { path: ..., canActivate: [canActivateGuard] }

function canDeactivateGuard: CanDeactivateFn<T> = 
    (
      component: T,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot

    ) => { ... }

    {path: ...CommonModule, canDeactivate: [canDeactivateGuard] }

    function canActivateChildGuard: CanActivateChildFn = 
    (
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ) => { ... }

    { path: ...CommonModule, canActivateChild: [canActivateGuard], children: ...}

    function resolveGuard implements ResolveFn<T> = 
    (
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ) => { ... }

    { path: ..., resolve: [resolveGuard] }

    function canLoadGuard: CanLoadFn = 
    (
      route: Route
    ) => { ... }

    { path: ..., canLoad: [canLoadGuard], loadChildren: ... }











