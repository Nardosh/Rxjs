import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { FilterComponent } from './observable/filter/filter.component';
import { MapTapComponent } from './observable/map-tap/map-tap.component';
import { RetryComponent } from './observable/retry/retry.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { Comp1Component } from './Comps/comp1/comp1.component';
import { Comp2Component } from './Comps/comp2/comp2.component';
import { Comp3Component } from './Comps/comp3/comp3.component';
import { CompsComponent } from './Comps/comps.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    FilterComponent,
    MapTapComponent,
    RetryComponent,
    DebounceTimeComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    CompsComponent,
    ReplaySubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
