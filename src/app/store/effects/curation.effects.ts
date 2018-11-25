import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { ApiService } from '../../services/api.service';
import { map, switchMap } from 'rxjs/operators';
import { ActionTypes, GetCuration } from '../actions/curation.actions';
@Injectable()
export class CurationEffects {
    constructor(private actions$: Actions, private apiService: ApiService) {}

    @Effect()
    getItems$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.ShowCuration),
        switchMap(() =>
            this.apiService.getCurations().pipe(
                map(items => new GetCuration(items))
            )
        )
    );
}
