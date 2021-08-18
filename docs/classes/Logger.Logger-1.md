[@arashi/logger - v2.0.0](../README.md) / [Exports](../modules.md) / [Logger](../modules/Logger.md) / Logger

# Class: Logger

[Logger](../modules/Logger.md).Logger

## Hierarchy

- `EventEmitter`

  ↳ **`Logger`**

## Table of contents

### Constructors

- [constructor](Logger.Logger-1.md#constructor)

### Properties

- [captureRejectionSymbol](Logger.Logger-1.md#capturerejectionsymbol)
- [captureRejections](Logger.Logger-1.md#capturerejections)
- [defaultMaxListeners](Logger.Logger-1.md#defaultmaxlisteners)
- [errorMonitor](Logger.Logger-1.md#errormonitor)

### Methods

- [\_formatDate](Logger.Logger-1.md#_formatdate)
- [\_getDefaultLogFilters](Logger.Logger-1.md#_getdefaultlogfilters)
- [\_shouldFilter](Logger.Logger-1.md#_shouldfilter)
- [addFilter](Logger.Logger-1.md#addfilter)
- [addListener](Logger.Logger-1.md#addlistener)
- [debug](Logger.Logger-1.md#debug)
- [deprecate](Logger.Logger-1.md#deprecate)
- [deprecateParameterType](Logger.Logger-1.md#deprecateparametertype)
- [emit](Logger.Logger-1.md#emit)
- [error](Logger.Logger-1.md#error)
- [eventNames](Logger.Logger-1.md#eventnames)
- [getFilters](Logger.Logger-1.md#getfilters)
- [getLogLevel](Logger.Logger-1.md#getloglevel)
- [getMaxListeners](Logger.Logger-1.md#getmaxlisteners)
- [info](Logger.Logger-1.md#info)
- [listenerCount](Logger.Logger-1.md#listenercount)
- [listeners](Logger.Logger-1.md#listeners)
- [log](Logger.Logger-1.md#log)
- [off](Logger.Logger-1.md#off)
- [on](Logger.Logger-1.md#on)
- [once](Logger.Logger-1.md#once)
- [prependListener](Logger.Logger-1.md#prependlistener)
- [prependOnceListener](Logger.Logger-1.md#prependoncelistener)
- [rawListeners](Logger.Logger-1.md#rawlisteners)
- [removeAllListeners](Logger.Logger-1.md#removealllisteners)
- [removeFilter](Logger.Logger-1.md#removefilter)
- [removeListener](Logger.Logger-1.md#removelistener)
- [setFilters](Logger.Logger-1.md#setfilters)
- [setLogLevel](Logger.Logger-1.md#setloglevel)
- [setMaxListeners](Logger.Logger-1.md#setmaxlisteners)
- [silly](Logger.Logger-1.md#silly)
- [trace](Logger.Logger-1.md#trace)
- [verbose](Logger.Logger-1.md#verbose)
- [warn](Logger.Logger-1.md#warn)
- [getEventListener](Logger.Logger-1.md#geteventlistener)
- [listenerCount](Logger.Logger-1.md#listenercount)
- [on](Logger.Logger-1.md#on)
- [once](Logger.Logger-1.md#once)

## Constructors

### constructor

• **new Logger**(`serviceName?`, `logLevel?`, `logLocation?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `serviceName` | `string` | `'Generic'` |
| `logLevel` | [`LogLevel`](../enums/LogLevel.LogLevel-1.md) | `undefined` |
| `logLocation?` | `string` | `undefined` |

#### Overrides

EventEmitter.constructor

#### Defined in

[src/Logger.ts:34](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L34)

## Properties

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](Logger.Logger-1.md#capturerejectionsymbol)

#### Inherited from

EventEmitter.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:94

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

EventEmitter.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:99

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:100

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](Logger.Logger-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

EventEmitter.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:93

## Methods

### \_formatDate

▸ `Protected` **_formatDate**(`now`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `Date` |

#### Returns

`string`

#### Defined in

[src/Logger.ts:161](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L161)

___

### \_getDefaultLogFilters

▸ `Protected` **_getDefaultLogFilters**(): `RegExp`[]

#### Returns

`RegExp`[]

#### Defined in

[src/Logger.ts:157](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L157)

___

### \_shouldFilter

▸ `Protected` **_shouldFilter**(`message`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`boolean`

#### Defined in

[src/Logger.ts:166](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L166)

___

### addFilter

▸ **addFilter**(`reg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reg` | `RegExp` |

#### Returns

`void`

#### Defined in

[src/Logger.ts:133](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L133)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Logger`](Logger.Logger-1.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Logger`](Logger.Logger-1.md)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:120

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

#### Defined in

[src/Logger.ts:228](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L228)

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

#### Defined in

[src/Logger.ts:252](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L252)

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

#### Defined in

[src/Logger.ts:272](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L272)

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

EventEmitter.emit

#### Defined in

node_modules/@types/node/events.d.ts:376

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

#### Defined in

[src/Logger.ts:248](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L248)

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

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:435

___

### getFilters

▸ **getFilters**(): `RegExp`[]

#### Returns

`RegExp`[]

#### Defined in

[src/Logger.ts:153](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L153)

___

### getLogLevel

▸ **getLogLevel**(): [`LogLevel`](../enums/LogLevel.LogLevel-1.md)

#### Returns

[`LogLevel`](../enums/LogLevel.LogLevel-1.md)

#### Defined in

[src/Logger.ts:129](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L129)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](Logger.Logger-1.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:292

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

#### Defined in

[src/Logger.ts:238](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L238)

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

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:382

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

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:305

___

### log

▸ **log**(`level`, `component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](../enums/LogLevel.LogLevel-1.md) |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[src/Logger.ts:198](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L198)

___

### off

▸ **off**(`eventName`, `listener`): [`Logger`](Logger.Logger-1.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Logger`](Logger.Logger-1.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:265

___

### on

▸ **on**(`eventName`, `listener`): [`Logger`](Logger.Logger-1.md)

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

[`Logger`](Logger.Logger-1.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:151

___

### once

▸ **once**(`eventName`, `listener`): [`Logger`](Logger.Logger-1.md)

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

[`Logger`](Logger.Logger-1.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:180

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Logger`](Logger.Logger-1.md)

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

[`Logger`](Logger.Logger-1.md)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:400

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Logger`](Logger.Logger-1.md)

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

[`Logger`](Logger.Logger-1.md)

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:416

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

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:335

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Logger`](Logger.Logger-1.md)

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

[`Logger`](Logger.Logger-1.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:276

___

### removeFilter

▸ **removeFilter**(`reg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reg` | `RegExp` |

#### Returns

`void`

#### Defined in

[src/Logger.ts:137](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L137)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Logger`](Logger.Logger-1.md)

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

[`Logger`](Logger.Logger-1.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:260

___

### setFilters

▸ **setFilters**(`filters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | `RegExp`[] |

#### Returns

`void`

#### Defined in

[src/Logger.ts:144](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L144)

___

### setLogLevel

▸ **setLogLevel**(`level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](../enums/LogLevel.LogLevel-1.md) |

#### Returns

`void`

#### Defined in

[src/Logger.ts:125](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L125)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Logger`](Logger.Logger-1.md)

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

[`Logger`](Logger.Logger-1.md)

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:286

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

#### Defined in

[src/Logger.ts:223](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L223)

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

#### Defined in

[src/Logger.ts:218](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L218)

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

#### Defined in

[src/Logger.ts:233](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L233)

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

#### Defined in

[src/Logger.ts:243](https://github.com/arashijs/logger/blob/667bffd/src/Logger.ts#L243)

___

### getEventListener

▸ `Static` **getEventListener**(`emitter`, `name`): `Function`[]

Returns a list listener for a specific emitter event name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.getEventListener

#### Defined in

node_modules/@types/node/events.d.ts:83

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

**`deprecated`** since v4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `eventName` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:79

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:77

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:75

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

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:76
