import { ActionTypes, GetCuration } from '../actions/curation.actions';
import { ICuration } from '../../services/api.service';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface IState {
    items: Array<ICuration>;
}

export const initialState: IState = {
    items : [],
};

export function curationReducer(state = initialState, action: GetCuration) {
    switch (action.type) {
        case ActionTypes.GetCuration: {
            console.log(action.payload);

            return action.payload;
        }
        default : return state;
    }
}

export const getCurationState = createFeatureSelector<IState>('curation');

export const getItems = createSelector(
    getCurationState,
    (state: IState) => state.items
);
