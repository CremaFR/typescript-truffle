import * as flux from 'flux';

export type addCategoryPayload = { category: string, field: string, typeInput: string, value :number };
export type addCategory = flux.ActionWP<addCategoryPayload>;
export const addCategory = flux.Actions.withPayload<addCategoryPayload>( 'taxcalculation#add-category' );

export type resetForm = flux.Action;
export const resetForm = flux.Actions.ofType( 'taxcalculation#resetForm' );


export type Actions = addCategory | resetForm;
