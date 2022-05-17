import { track } from '@minimal-analytics/ga4';

/* -----------------------------------
 *
 * Globals
 *
 * -------------------------------- */

window.gaTrackingId = 'G-HWD0EHM8LC';

/* -----------------------------------
 *
 * Analytics
 *
 * -------------------------------- */

if (!__DEV__) {
  track();
}
