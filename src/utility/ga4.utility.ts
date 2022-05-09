/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  type?: string;
  event?: IEvent;
  debug?: boolean;
  error?: {
    message: string;
    fatal: boolean;
  };
}

/* -----------------------------------
 *
 * IEvent
 *
 * -------------------------------- */

interface IEvent {
  category: string;
  action: string;
  label: string;
  value: string;
}

/* -----------------------------------
 *
 * Variables
 *
 * -------------------------------- */

const clientKey = '_gacid';
const sessionKey = '_gasid';
const trackingId = 'G-HWD0EHM8LC';
const analyticsEndpoint = 'https://www.google-analytics.com/g/collect';
const firstVisit = !localStorage.getItem(clientKey) ? '1' : void 0;
const sessionStart = !sessionStorage.getItem(sessionKey) ? '1' : void 0;
const searchTerms = ['q', 's', 'search', 'query', 'keyword'];

/* -----------------------------------
 *
 * Options
 *
 * -------------------------------- */

const options = {
  colourDepth: true,
  characterSet: true,
  screenSize: true,
  language: true,
};

/* -----------------------------------
 *
 * ClientId
 *
 * -------------------------------- */

function getClientId(key = clientKey) {
  const clientId = Math.random().toString(36);
  const storedValue = localStorage.getItem(key);

  if (!storedValue) {
    localStorage.setItem(key, clientId);

    return clientId;
  }

  return storedValue;
}

/* -----------------------------------
 *
 * SessionId
 *
 * -------------------------------- */

function getSessionId(key = sessionKey) {
  const sessionId = `${Math.floor(Math.random() * 1000000000) + 1}`;
  const storedValue = sessionStorage.getItem(key);

  if (!storedValue) {
    sessionStorage.setItem(key, sessionId);

    return sessionId;
  }

  return storedValue;
}

/* -----------------------------------
 *
 * SessionCount
 *
 * -------------------------------- */

function getSessionCount(key = '_gasct') {
  let sessionCount = '1';
  const storedValue = sessionStorage.getItem(key);

  if (storedValue) {
    sessionCount = `${+storedValue + 1}`;
  }

  sessionStorage.setItem(key, sessionCount);

  return sessionCount;
}

/* -----------------------------------
 *
 * EventMeta
 *
 * -------------------------------- */

function getEventMeta({ type, event }: Pick<IProps, 'type' | 'event'>) {
  const searchString = document.location.search;
  const searchParams = new URLSearchParams(searchString);

  const searchResults = searchTerms.some((term) =>
    new RegExp(`[\?|&]${term}=`, 'g').test(searchString)
  );

  const eventId = searchResults ? 'view_search_results' : type;
  const searchTerm = searchTerms.find((term) => searchParams.get(term));

  return {
    en: eventId,
    'ep.search_term': searchTerm,
    ec: event?.category || void 0,
    ea: event?.action || void 0,
    el: event?.label || void 0,
    ev: event?.value || void 0,
  };
}

/* -----------------------------------
 *
 * Document
 *
 * -------------------------------- */

function getDocumentMeta() {
  const title = document.title;
  const origin = document.location.origin;
  const pathname = document.location.pathname;
  const search = document.location.search;
  let referrer;

  if (document.referrer.indexOf(location.host) < 0) {
    referrer = document.referrer;
  }

  return { dr: referrer, dl: origin + pathname + search, dt: title };
}

/* -----------------------------------
 *
 * Device
 *
 * -------------------------------- */

function getDeviceMeta() {
  let screenSize;
  let colourDepth;
  let viewPort;

  const visual = {
    width: Math.floor((self.visualViewport || {}).width),
    height: Math.floor((self.visualViewport || {}).height),
  };

  if (options.colourDepth && screen.colorDepth) {
    colourDepth = `${screen.colorDepth}-bit`;
  }

  if (options.screenSize) {
    screenSize = `${(self.screen || {}).width}x${(self.screen || {}).height}`;
  }

  if (options.screenSize && self.visualViewport) {
    viewPort = `${visual.width}x${visual.height}`;
  }

  return { sd: colourDepth, sr: screenSize, vp: viewPort };
}

/* -----------------------------------
 *
 * Query
 *
 * -------------------------------- */

function getQueryParams({ type, event, debug, error }: IProps) {
  const payload = {
    v: '2', // v2 for GA4
    tid: trackingId,
    _p: getSessionId('_gapid'),
    ul: (navigator.language || '').toLowerCase() || void 0,
    cid: getClientId(),
    _fv: firstVisit,
    _s: '1',
    sid: getSessionId(),
    sct: getSessionCount(),
    seg: '1',
    _ss: sessionStart,
    _dbg: debug ? '1' : void 0,
    exd: error?.message || void 0,
    ...getEventMeta({ type, event }),
    ...getDocumentMeta(),
    ...getDeviceMeta(),
  };

  Object.keys(payload).forEach((key) =>
    payload[key] === void 0 ? delete payload[key] : {}
  );

  return new URLSearchParams(payload);
}

/* -----------------------------------
 *
 * Track
 *
 * -------------------------------- */

function track({ type = 'page_view', event, debug, error }: IProps = {}) {
  if (__DEV__ && !debug) {
    return; // no-op
  }

  const queryParams = getQueryParams({ type, event, debug, error });
  const queryString = new URLSearchParams(queryParams).toString();

  navigator.sendBeacon(`${analyticsEndpoint}?${queryString}`);
}

/* -----------------------------------
 *
 * Event
 *
 * -------------------------------- */

function event(event: IEvent) {
  track({ type: 'event', event });
}

/* -----------------------------------
 *
 * Error
 *
 * -------------------------------- */

function error(message: string, fatal: boolean) {
  track({ type: 'exception', error: { message, fatal } });
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { track, event, error };
