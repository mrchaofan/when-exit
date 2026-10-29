
/* IMPORT */

import process from 'node:process';

/* MAIN */

const IS_ELECTRON = ( typeof process.versions['electron'] === 'string' );

const IS_LINUX = ( process.platform === 'linux' );

const IS_WINDOWS = ( process.platform === 'win32' );

/* EXPORT */

export {IS_ELECTRON, IS_LINUX, IS_WINDOWS};
