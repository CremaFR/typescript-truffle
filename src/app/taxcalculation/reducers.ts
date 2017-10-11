import {Reducer, ReducersMapObject} from 'redux';
import * as flux from 'flux';

import * as actions from './actions';

export const defaultState = (): any => ({
   
});

export type Store = {
    taxcalculation: any,
}


/*******************************************************************************************************
 *
 *                                              ACTIONS
 *
 *******************************************************************************************************/

function resetForm(state: any, action: actions.resetForm): any {
    return {
        ...defaultState()
    }
}

const reducer: Reducer<any> = (state = defaultState(), action: actions.Actions) => flux.Reducing
    .of(actions.addCategory.Type, resetForm)
    .or(actions.resetForm.Type, resetForm)
    .exec(state, action);

export const reducers: ReducersMapObject = {
    taxcalculation: reducer
};
