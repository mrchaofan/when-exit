# WhenExit

Execute a function right before the process, or the browser's tab, is about to exit.

## Install

```sh
npm install when-exit
```

## Usage

```ts
import whenExit from 'when-exit';

// Registering multiple callbacks

onExit ( () => {
  console.log ( 'Callback 1' );
});

onExit ( () => {
  console.log ( 'Callback 2' );
});

// Registering and disposing a callback

const disposer = onExit ( () => {
  console.log ( 'Callback 3' );
});

disposer ();

// Triggering the process to exit

process.exit (); // Callback 1 and 2 are called before exiting
```

## Signals

`SIGTRAP` is not intercepted in Electron (identified by `process.versions.electron`). Electron can use synchronous native traps for fatal errors, including out-of-memory failures, before JavaScript cleanup has a chance to run. In Electron, cleanup callbacks therefore do not run when the process terminates directly from `SIGTRAP`, including an externally sent `SIGTRAP`. Ordinary Node.js retains its existing signal handling.

## License

MIT © Fabio Spampinato
