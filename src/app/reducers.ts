import { combineReducers } from 'redux';

import * as taxcalculation from './taxcalculation/reducers';
import * as vote from './vote/reducers';

//import { reducers as coreR, Stores as CoreS } from 'app/core';
//import { reducers as fS, Stores as FSS } from 'app/form-samples';


export type Stores = taxcalculation.Store | vote.Store;
export default {
    ...taxcalculation.reducers,
    ...vote.reducers,
};