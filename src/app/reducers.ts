import { combineReducers } from 'redux';

import * as taxcalculation from './taxcalculation/reducers';

//import { reducers as coreR, Stores as CoreS } from 'app/core';
//import { reducers as fS, Stores as FSS } from 'app/form-samples';


export type Stores = taxcalculation.Store;
export default {
    ...taxcalculation.reducers
};