import { Component, OnInit, OnDestroy, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy, DoCheck, OnChanges {

  i: number = 0;
  
  ngOnChanges(changes: import("c:/Users/MicroVault/Documents/AlchemySolutions/Sunsoft/ANGULAR/databinding/node_modules/@angular/core/src/metadata/lifecycle_hooks").SimpleChanges): void {
     console.log("ngOnChanges() called on LifeCycle Component" + (++this.i));
  }
 

  ngDoCheck(): void {
    console.log("ngDoCheck() called on LifeCycle Component...." + (++this.i));
  }


  ngOnDestroy(): void {
    console.log("ngOnDestroy() called on LifeCycle Component...." + (++this.i));
  }

  constructor() {
    console.log("From Constructor of LifeCycle Component....." + (++this.i));
  }

  ngOnInit() {
    console.log("ngOnInit() called on LifeCycle Component...." + (++this.i));
  }
  abc(){
    console.log("abc() is called..."+ (++this.i))
  }

}
