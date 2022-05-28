import { Component, Output } from '@angular/core';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count$? : Observable<number>;

  constructor(private state: Store<{count: number}>){
    this.count$ = this.state.select('count');
  }
}
