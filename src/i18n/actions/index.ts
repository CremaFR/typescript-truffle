import * as flux from '../../flux'


/** Payload of loading */
export type Payload = {
    data: { messages: { [key: string]: Object }, formats: { [key: string]: Object } },
    defaultLocale: string
};

/** Load i18n context */
export type Load = flux.ActionWP<Payload>;
export const Load: flux.ActionWPFn<Payload> = flux.Actions.withPayload<Payload>( 'krankshaft#i18n#load' );

export type ChangeLanguage = flux.ActionWP<string>;
export const ChangeLanguage: flux.ActionWPFn<string> = flux.Actions.withPayload<string>( 'krankshaft#i18n#changeLanguage' )


export type Actions = Load | ChangeLanguage;
