import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import { increment, decrement, reset } from '../../states/counter.actions';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss']
})
export class BootComponent {

  public count$?: Observable<number>;

  constructor(private store: Store<{count: number}>) {

    this.count$ = this.store.select('count');

  }

  public increment() {
    this.store.dispatch(increment());
  }

  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(reset());
  }

}
