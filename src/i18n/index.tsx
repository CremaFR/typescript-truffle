import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import * as enGb from './en-GB';
import * as frFr from './fr-FR';
import InjectedIntl = ReactIntl.InjectedIntl;

export * from './actions';
export * from './containers';
export const en_GB: { messages: Object, formats: Object } = enGb;
export const fr_FR: { messages: Object, formats: Object } = frFr;

export { FormattedHTMLMessage as HTMLMessage, FormattedMessage as Message };



