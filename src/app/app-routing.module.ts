import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { Subject, filter } from 'rxjs';
import { FilterComponent } from './observable/filter/filter.component';
import { MapTapComponent } from './observable/map-tap/map-tap.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { CompsComponent } from './Comps/comps.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';

const routes: Routes = [
  {path: "promise", component: PromiseComponent},
  {path : "observable", component: ObservableComponent, children: [
    {path: "" , component: ListComponent},
    {path: "fromEvent" , component: FromEventComponent},
    {path: "interval" , component: IntervalComponent},
    {path: "of-from" , component: OfFromComponent},
    {path: "toArray" , component: ToArrayComponent},
    {path: "custom" , component: CustomObservableComponent},
    {path: "filter" , component: FilterComponent},
    {path: "map" , component: MapTapComponent},
    {path: "retry" , component: RetryComponent},
    {path: "debounceTime" , component: DebounceTimeComponent},
    {path: "replay" , component: ReplaySubjectComponent},
    {path: " **" , redirectTo: "observable"}
  ] },
  {path: "subject", component: CompsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
