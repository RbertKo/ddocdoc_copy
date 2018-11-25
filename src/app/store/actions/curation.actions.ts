import { Action } from '@ngrx/store';
import { ICuration } from '../../services/api.service';
import { IState } from '../reducer/curation.reducer';

export enum ActionTypes {
    GetCuration = '[Curation Page] GetCuration',
    ShowCuration = '[Curation Page ShowCuration',
}

export class ShowCuration implements Action {
    readonly type = ActionTypes.ShowCuration;
}

export class GetCuration implements Action {
    constructor(public payload: IState) {}
    readonly type = ActionTypes.GetCuration;
}
