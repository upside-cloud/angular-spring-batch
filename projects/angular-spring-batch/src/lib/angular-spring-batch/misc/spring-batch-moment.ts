import * as momentTimezone from 'moment-timezone';

momentTimezone.tz.setDefault('Europe/Berlin');
export const moment = momentTimezone;
