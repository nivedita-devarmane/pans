import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PersonComponent } from './person/person.component';
import { CalciComponent } from './calci/calci.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CubePipe } from './cube.pipe';
import { PowerPipe } from './power.pipe';
import { SalaryPipe } from './salary.pipe';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    CalculatorComponent,
    PersonComponent,
    CalciComponent,
    LifecycleComponent,
    DirectivedemoComponent,
    PipedemoComponent,
    CubePipe,
    PowerPipe,
    SalaryPipe,
    TwowaybindingComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
