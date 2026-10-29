
/* IMPORT */

import {IS_ELECTRON, IS_LINUX, IS_WINDOWS} from './constants';

/* MAIN */

//URL: https://github.com/tapjs/signal-exit/blob/458776d9cf8be89712aa1f7b45bb2163ce15ef4a/src/signals.ts

const Signals = ['SIGHUP', 'SIGINT', 'SIGTERM'];

if ( !IS_WINDOWS ) {

  Signals.push ( 'SIGALRM', 'SIGABRT', 'SIGVTALRM', 'SIGXCPU', 'SIGXFSZ', 'SIGUSR2', 'SIGSYS', 'SIGQUIT', 'SIGIOT' );

  // Electron uses synchronous SIGTRAPs for fatal errors; JS cleanup cannot safely handle them.
  if ( !IS_ELECTRON ) Signals.push ( 'SIGTRAP' );

}

if ( IS_LINUX ) {

  Signals.push ( 'SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT' );

}

/* EXPORT */

export default Signals;
