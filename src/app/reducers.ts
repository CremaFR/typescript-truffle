import { combineReducers } from 'redux';

import * as vote from './vote/reducers';

//import { reducers as coreR, Stores as CoreS } from 'app/core';
//import { reducers as fS, Stores as FSS } from 'app/form-samples';


export type Stores = vote.Store;
export default {
    ...vote.reducers,
};