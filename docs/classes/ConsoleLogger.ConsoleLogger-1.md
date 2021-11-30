[@arashi/logger - v3.0.0](../README.md) / [Exports](../modules.md) / [ConsoleLogger](../modules/ConsoleLogger.md) / ConsoleLogger

# Class: ConsoleLogger

[ConsoleLogger](../modules/ConsoleLogger.md).ConsoleLogger

## Hierarchy

- [`Logger`](Logger.Logger-1.md)

  ↳ **`ConsoleLogger`**

## Table of contents

### Constructors

- [constructor](ConsoleLogger.ConsoleLogger-1.md#constructor)

### Properties

- [captureRejectionSymbol](ConsoleLogger.ConsoleLogger-1.md#capturerejectionsymbol)
- [captureRejections](ConsoleLogger.ConsoleLogger-1.md#capturerejections)
- [defaultMaxListeners](ConsoleLogger.ConsoleLogger-1.md#defaultmaxlisteners)
- [errorMonitor](ConsoleLogger.ConsoleLogger-1.md#errormonitor)

### Methods

- [\_formatDate](ConsoleLogger.ConsoleLogger-1.md#_formatdate)
- [\_getDefaultLogFilters](ConsoleLogger.ConsoleLogger-1.md#_getdefaultlogfilters)
- [\_log](ConsoleLogger.ConsoleLogger-1.md#_log)
- [\_shouldFilter](ConsoleLogger.ConsoleLogger-1.md#_shouldfilter)
- [addFilter](ConsoleLogger.ConsoleLogger-1.md#addfilter)
- [addListener](ConsoleLogger.ConsoleLogger-1.md#addlistener)
- [debug](ConsoleLogger.ConsoleLogger-1.md#debug)
- [deprecate](ConsoleLogger.ConsoleLogger-1.md#deprecate)
- [deprecateParameterType](ConsoleLogger.ConsoleLogger-1.md#deprecateparametertype)
- [emit](ConsoleLogger.ConsoleLogger-1.md#emit)
- [error](ConsoleLogger.ConsoleLogger-1.md#error)
- [eventNames](ConsoleLogger.ConsoleLogger-1.md#eventnames)
- [getFilters](ConsoleLogger.ConsoleLogger-1.md#getfilters)
- [getLogLevel](ConsoleLogger.ConsoleLogger-1.md#getloglevel)
- [getMaxListeners](ConsoleLogger.ConsoleLogger-1.md#getmaxlisteners)
- [info](ConsoleLogger.ConsoleLogger-1.md#info)
- [listenerCount](ConsoleLogger.ConsoleLogger-1.md#listenercount)
- [listeners](ConsoleLogger.ConsoleLogger-1.md#listeners)
- [log](ConsoleLogger.ConsoleLogger-1.md#log)
- [off](ConsoleLogger.ConsoleLogger-1.md#off)
- [on](ConsoleLogger.ConsoleLogger-1.md#on)
- [once](ConsoleLogger.ConsoleLogger-1.md#once)
- [prependListener](ConsoleLogger.ConsoleLogger-1.md#prependlistener)
- [prependOnceListener](ConsoleLogger.ConsoleLogger-1.md#prependoncelistener)
- [rawListeners](ConsoleLogger.ConsoleLogger-1.md#rawlisteners)
- [removeAllListeners](ConsoleLogger.ConsoleLogger-1.md#removealllisteners)
- [removeFilter](ConsoleLogger.ConsoleLogger-1.md#removefilter)
- [removeListener](ConsoleLogger.ConsoleLogger-1.md#removelistener)
- [setFilters](ConsoleLogger.ConsoleLogger-1.md#setfilters)
- [setLogLevel](ConsoleLogger.ConsoleLogger-1.md#setloglevel)
- [setMaxListeners](ConsoleLogger.ConsoleLogger-1.md#setmaxlisteners)
- [silly](ConsoleLogger.ConsoleLogger-1.md#silly)
- [trace](ConsoleLogger.ConsoleLogger-1.md#trace)
- [verbose](ConsoleLogger.ConsoleLogger-1.md#verbose)
- [warn](ConsoleLogger.ConsoleLogger-1.md#warn)
- [getEventListeners](ConsoleLogger.ConsoleLogger-1.md#geteventlisteners)
- [listenerCount](ConsoleLogger.ConsoleLogger-1.md#listenercount)
- [on](ConsoleLogger.ConsoleLogger-1.md#on)
- [once](ConsoleLogger.ConsoleLogger-1.md#once)

## Constructors

### constructor

• **new ConsoleLogger**(`serviceName?`, `logLevel?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `serviceName` | `string` | `'Generic'` |
| `logLevel` | `LogLevel` | `undefined` |

#### Inherited from

[Logger](Logger.Logger-1.md).[constructor](Logger.Logger-1.md#constructor)

#### Defined in

[src/Logger.ts:46](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L46)

## Properties

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](ConsoleLogger.ConsoleLogger-1.md#capturerejectionsymbol)

#### Inherited from

[Logger](Logger.Logger-1.md).[captureRejectionSymbol](Logger.Logger-1.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:273

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[Logger](Logger.Logger-1.md).[captureRejections](Logger.Logger-1.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:278

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Logger](Logger.Logger-1.md).[defaultMaxListeners](Logger.Logger-1.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:279

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](ConsoleLogger.ConsoleLogger-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[Logger](Logger.Logger-1.md).[errorMonitor](Logger.Logger-1.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:272

## Methods

### \_formatDate

▸ `Protected` **_formatDate**(`now`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `Date` |

#### Returns

`string`

#### Inherited from

[Logger](Logger.Logger-1.md).[_formatDate](Logger.Logger-1.md#_formatdate)

#### Defined in

[src/Logger.ts:179](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L179)

___

### \_getDefaultLogFilters

▸ `Protected` **_getDefaultLogFilters**(): `RegExp`[]

#### Returns

`RegExp`[]

#### Inherited from

[Logger](Logger.Logger-1.md).[_getDefaultLogFilters](Logger.Logger-1.md#_getdefaultlogfilters)

#### Defined in

[src/Logger.ts:175](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L175)

___

### \_log

▸ `Protected` **_log**(`level`, `message`, `metadata`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `LogLevel` |
| `message` | `string` |
| `metadata` | [`ILogMetadata`](../interfaces/Logger.ILogMetadata.md) |

#### Returns

`void`

#### Overrides

[Logger](Logger.Logger-1.md).[_log](Logger.Logger-1.md#_log)

#### Defined in

[src/ConsoleLogger.ts:9](https://github.com/arashijs/logger/blob/9bf4ab6/src/ConsoleLogger.ts#L9)

___

### \_shouldFilter

▸ `Protected` **_shouldFilter**(`message`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`boolean`

#### Inherited from

[Logger](Logger.Logger-1.md).[_shouldFilter](Logger.Logger-1.md#_shouldfilter)

#### Defined in

[src/Logger.ts:184](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L184)

___

### addFilter

▸ **addFilter**(`reg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reg` | `RegExp` |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[addFilter](Logger.Logger-1.md#addfilter)

#### Defined in

[src/Logger.ts:151](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L151)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

#### Inherited from

[Logger](Logger.Logger-1.md).[addListener](Logger.Logger-1.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:299

___

### debug

▸ **debug**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[debug](Logger.Logger-1.md#debug)

#### Defined in

[src/Logger.ts:257](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L257)

___

### deprecate

▸ **deprecate**(`component`, `alternative?`, `methodOverride?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `alternative?` | `string` |
| `methodOverride?` | `string` |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[deprecate](Logger.Logger-1.md#deprecate)

#### Defined in

[src/Logger.ts:281](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L281)

___

### deprecateParameterType

▸ **deprecateParameterType**(`component`, `argumentLocation`, `deprecatedType`, `alternative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `argumentLocation` | `number` |
| `deprecatedType` | `string` |
| `alternative?` | `string` |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[deprecateParameterType](Logger.Logger-1.md#deprecateparametertype)

#### Defined in

[src/Logger.ts:301](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L301)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[Logger](Logger.Logger-1.md).[emit](Logger.Logger-1.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:555

___

### error

▸ **error**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[error](Logger.Logger-1.md#error)

#### Defined in

[src/Logger.ts:277](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L277)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[Logger](Logger.Logger-1.md).[eventNames](Logger.Logger-1.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:614

___

### getFilters

▸ **getFilters**(): `RegExp`[]

#### Returns

`RegExp`[]

#### Inherited from

[Logger](Logger.Logger-1.md).[getFilters](Logger.Logger-1.md#getfilters)

#### Defined in

[src/Logger.ts:171](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L171)

___

### getLogLevel

▸ **getLogLevel**(): `LogLevel`

#### Returns

`LogLevel`

#### Inherited from

[Logger](Logger.Logger-1.md).[getLogLevel](Logger.Logger-1.md#getloglevel)

#### Defined in

[src/Logger.ts:147](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L147)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](ConsoleLogger.ConsoleLogger-1.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[Logger](Logger.Logger-1.md).[getMaxListeners](Logger.Logger-1.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:471

___

### info

▸ **info**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[info](Logger.Logger-1.md#info)

#### Defined in

[src/Logger.ts:267](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L267)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[Logger](Logger.Logger-1.md).[listenerCount](Logger.Logger-1.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:561

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Logger](Logger.Logger-1.md).[listeners](Logger.Logger-1.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:484

___

### log

▸ **log**(`level`, `component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `LogLevel` |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[log](Logger.Logger-1.md#log)

#### Defined in

[src/Logger.ts:218](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L218)

___

### off

▸ **off**(`eventName`, `listener`): [`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

#### Inherited from

[Logger](Logger.Logger-1.md).[off](Logger.Logger-1.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:444

___

### on

▸ **on**(`eventName`, `listener`): [`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

#### Inherited from

[Logger](Logger.Logger-1.md).[on](Logger.Logger-1.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:330

___

### once

▸ **once**(`eventName`, `listener`): [`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

#### Inherited from

[Logger](Logger.Logger-1.md).[once](Logger.Logger-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:359

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

#### Inherited from

[Logger](Logger.Logger-1.md).[prependListener](Logger.Logger-1.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:579

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

#### Inherited from

[Logger](Logger.Logger-1.md).[prependOnceListener](Logger.Logger-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:595

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Logger](Logger.Logger-1.md).[rawListeners](Logger.Logger-1.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:514

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

#### Inherited from

[Logger](Logger.Logger-1.md).[removeAllListeners](Logger.Logger-1.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:455

___

### removeFilter

▸ **removeFilter**(`reg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reg` | `RegExp` |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[removeFilter](Logger.Logger-1.md#removefilter)

#### Defined in

[src/Logger.ts:155](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L155)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

#### Inherited from

[Logger](Logger.Logger-1.md).[removeListener](Logger.Logger-1.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:439

___

### setFilters

▸ **setFilters**(`filters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | `RegExp`[] |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[setFilters](Logger.Logger-1.md#setfilters)

#### Defined in

[src/Logger.ts:162](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L162)

___

### setLogLevel

▸ **setLogLevel**(`level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `LogLevel` |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[setLogLevel](Logger.Logger-1.md#setloglevel)

#### Defined in

[src/Logger.ts:143](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L143)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ConsoleLogger`](ConsoleLogger.ConsoleLogger-1.md)

#### Inherited from

[Logger](Logger.Logger-1.md).[setMaxListeners](Logger.Logger-1.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:465

___

### silly

▸ **silly**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[silly](Logger.Logger-1.md#silly)

#### Defined in

[src/Logger.ts:252](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L252)

___

### trace

▸ **trace**(`component`, `message`, `metadata?`): `void`

Alias for `silly`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[trace](Logger.Logger-1.md#trace)

#### Defined in

[src/Logger.ts:247](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L247)

___

### verbose

▸ **verbose**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[verbose](Logger.Logger-1.md#verbose)

#### Defined in

[src/Logger.ts:262](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L262)

___

### warn

▸ **warn**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Inherited from

[Logger](Logger.Logger-1.md).[warn](Logger.Logger-1.md#warn)

#### Defined in

[src/Logger.ts:272](https://github.com/arashijs/logger/blob/9bf4ab6/src/Logger.ts#L272)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`since`** v15.2.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Logger](Logger.Logger-1.md).[getEventListeners](Logger.Logger-1.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:262

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[Logger](Logger.Logger-1.md).[listenerCount](Logger.Logger-1.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:234

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[Logger](Logger.Logger-1.md).[on](Logger.Logger-1.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:217

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Logger](Logger.Logger-1.md).[once](Logger.Logger-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Logger](Logger.Logger-1.md).[once](Logger.Logger-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:158
