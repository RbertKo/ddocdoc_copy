import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IState, getItems } from 'src/app/store/reducer/curation.reducer';
import { Observable } from 'rxjs';
import { ShowCuration } from 'src/app/store/actions/curation.actions';
import { ICuration } from 'src/app/services/api.service';

@Component({
  selector: 'app-curation',
  templateUrl: './curation.component.html',
  styleUrls: ['./curation.component.scss']
})
export class CurationComponent implements OnInit {
  private items$: Observable<Array<ICuration>>;

  constructor(private store: Store<IState>) {
    this.items$ = store.select(getItems);
   }

  ngOnInit() {
    this.store.dispatch(new ShowCuration());
  }
}
