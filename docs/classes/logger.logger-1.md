[@arashi/logger](../README.md) / [Exports](../modules.md) / [Logger](../modules/logger.md) / Logger

# Class: Logger

[Logger](../modules/logger.md).Logger

## Hierarchy

* *EventEmitter*

  ↳ **Logger**

## Table of contents

### Constructors

- [constructor](logger.logger-1.md#constructor)

### Properties

- [captureRejectionSymbol](logger.logger-1.md#capturerejectionsymbol)
- [captureRejections](logger.logger-1.md#capturerejections)
- [defaultMaxListeners](logger.logger-1.md#defaultmaxlisteners)
- [errorMonitor](logger.logger-1.md#errormonitor)

### Methods

- [\_formatDate](logger.logger-1.md#_formatdate)
- [\_getDefaultLogFilters](logger.logger-1.md#_getdefaultlogfilters)
- [\_shouldFilter](logger.logger-1.md#_shouldfilter)
- [addFilter](logger.logger-1.md#addfilter)
- [addListener](logger.logger-1.md#addlistener)
- [debug](logger.logger-1.md#debug)
- [deprecate](logger.logger-1.md#deprecate)
- [deprecateParameterType](logger.logger-1.md#deprecateparametertype)
- [emit](logger.logger-1.md#emit)
- [error](logger.logger-1.md#error)
- [eventNames](logger.logger-1.md#eventnames)
- [getFilters](logger.logger-1.md#getfilters)
- [getLogLevel](logger.logger-1.md#getloglevel)
- [getMaxListeners](logger.logger-1.md#getmaxlisteners)
- [info](logger.logger-1.md#info)
- [listenerCount](logger.logger-1.md#listenercount)
- [listeners](logger.logger-1.md#listeners)
- [log](logger.logger-1.md#log)
- [off](logger.logger-1.md#off)
- [on](logger.logger-1.md#on)
- [once](logger.logger-1.md#once)
- [prependListener](logger.logger-1.md#prependlistener)
- [prependOnceListener](logger.logger-1.md#prependoncelistener)
- [rawListeners](logger.logger-1.md#rawlisteners)
- [removeAllListeners](logger.logger-1.md#removealllisteners)
- [removeFilter](logger.logger-1.md#removefilter)
- [removeListener](logger.logger-1.md#removelistener)
- [setFilters](logger.logger-1.md#setfilters)
- [setLogLevel](logger.logger-1.md#setloglevel)
- [setMaxListeners](logger.logger-1.md#setmaxlisteners)
- [silly](logger.logger-1.md#silly)
- [trace](logger.logger-1.md#trace)
- [verbose](logger.logger-1.md#verbose)
- [warn](logger.logger-1.md#warn)
- [listenerCount](logger.logger-1.md#listenercount)
- [on](logger.logger-1.md#on)
- [once](logger.logger-1.md#once)

## Constructors

### constructor

\+ **new Logger**(`serviceName?`: *string*, `logLevel?`: [*LogLevel*](../enums/loglevel.loglevel-1.md), `logLocation?`: *string*): [*Logger*](logger.logger-1.md)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`serviceName` | *string* | 'Generic' |
`logLevel` | [*LogLevel*](../enums/loglevel.loglevel-1.md) | ... |
`logLocation?` | *string* | - |

**Returns:** [*Logger*](logger.logger-1.md)

Defined in: [src/Logger.ts:32](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L32)

## Properties

### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](logger.logger-1.md#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:43

___

### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:49

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:50

___

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](logger.logger-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:42

## Methods

### \_formatDate

▸ `Protected`**_formatDate**(`now`: Date): *string*

#### Parameters:

Name | Type |
------ | ------ |
`now` | Date |

**Returns:** *string*

Defined in: [src/Logger.ts:161](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L161)

___

### \_getDefaultLogFilters

▸ `Protected`**_getDefaultLogFilters**(): *RegExp*[]

**Returns:** *RegExp*[]

Defined in: [src/Logger.ts:157](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L157)

___

### \_shouldFilter

▸ `Protected`**_shouldFilter**(`message`: *any*): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`message` | *any* |

**Returns:** *boolean*

Defined in: [src/Logger.ts:166](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L166)

___

### addFilter

▸ **addFilter**(`reg`: *RegExp*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`reg` | *RegExp* |

**Returns:** *void*

Defined in: [src/Logger.ts:133](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L133)

___

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Logger*](logger.logger-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Logger*](logger.logger-1.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### debug

▸ **debug**(`component`: *string*, `message`: *any*, `metadata?`: *Record*<*any*, *any*\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`component` | *string* |
`message` | *any* |
`metadata?` | *Record*<*any*, *any*\> |

**Returns:** *void*

Defined in: [src/Logger.ts:228](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L228)

___

### deprecate

▸ **deprecate**(`component`: *string*, `alternative?`: *string*, `methodOverride?`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`component` | *string* |
`alternative?` | *string* |
`methodOverride?` | *string* |

**Returns:** *void*

Defined in: [src/Logger.ts:252](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L252)

___

### deprecateParameterType

▸ **deprecateParameterType**(`component`: *string*, `argumentLocation`: *number*, `deprecatedType`: *string*, `alternative?`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`component` | *string* |
`argumentLocation` | *number* |
`deprecatedType` | *string* |
`alternative?` | *string* |

**Returns:** *void*

Defined in: [src/Logger.ts:272](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L272)

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:72

___

### error

▸ **error**(`component`: *string*, `message`: *any*, `metadata?`: *Record*<*any*, *any*\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`component` | *string* |
`message` | *any* |
`metadata?` | *Record*<*any*, *any*\> |

**Returns:** *void*

Defined in: [src/Logger.ts:248](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L248)

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:77

___

### getFilters

▸ **getFilters**(): *RegExp*[]

**Returns:** *RegExp*[]

Defined in: [src/Logger.ts:153](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L153)

___

### getLogLevel

▸ **getLogLevel**(): [*LogLevel*](../enums/loglevel.loglevel-1.md)

**Returns:** [*LogLevel*](../enums/loglevel.loglevel-1.md)

Defined in: [src/Logger.ts:129](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L129)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:69

___

### info

▸ **info**(`component`: *string*, `message`: *any*, `metadata?`: *Record*<*any*, *any*\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`component` | *string* |
`message` | *any* |
`metadata?` | *Record*<*any*, *any*\> |

**Returns:** *void*

Defined in: [src/Logger.ts:238](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L238)

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:73

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:70

___

### log

▸ **log**(`level`: [*LogLevel*](../enums/loglevel.loglevel-1.md), `component`: *string*, `message`: *any*, `metadata?`: *Record*<*any*, *any*\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`level` | [*LogLevel*](../enums/loglevel.loglevel-1.md) |
`component` | *string* |
`message` | *any* |
`metadata?` | *Record*<*any*, *any*\> |

**Returns:** *void*

Defined in: [src/Logger.ts:198](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L198)

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Logger*](logger.logger-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Logger*](logger.logger-1.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Logger*](logger.logger-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Logger*](logger.logger-1.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Logger*](logger.logger-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Logger*](logger.logger-1.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Logger*](logger.logger-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Logger*](logger.logger-1.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Logger*](logger.logger-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Logger*](logger.logger-1.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:71

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Logger*](logger.logger-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* \| *symbol* |

**Returns:** [*Logger*](logger.logger-1.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeFilter

▸ **removeFilter**(`reg`: *RegExp*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`reg` | *RegExp* |

**Returns:** *void*

Defined in: [src/Logger.ts:137](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L137)

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Logger*](logger.logger-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Logger*](logger.logger-1.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### setFilters

▸ **setFilters**(`filters`: *RegExp*[]): *void*

#### Parameters:

Name | Type |
------ | ------ |
`filters` | *RegExp*[] |

**Returns:** *void*

Defined in: [src/Logger.ts:144](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L144)

___

### setLogLevel

▸ **setLogLevel**(`level`: [*LogLevel*](../enums/loglevel.loglevel-1.md)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`level` | [*LogLevel*](../enums/loglevel.loglevel-1.md) |

**Returns:** *void*

Defined in: [src/Logger.ts:125](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L125)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Logger*](logger.logger-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*Logger*](logger.logger-1.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### silly

▸ **silly**(`component`: *string*, `message`: *any*, `metadata?`: *Record*<*any*, *any*\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`component` | *string* |
`message` | *any* |
`metadata?` | *Record*<*any*, *any*\> |

**Returns:** *void*

Defined in: [src/Logger.ts:223](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L223)

___

### trace

▸ **trace**(`component`: *string*, `message`: *any*, `metadata?`: *Record*<*any*, *any*\>): *void*

Alias for `silly`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`component` | *string* | - |
`message` | *any* |     |
`metadata?` | *Record*<*any*, *any*\> | - |

**Returns:** *void*

Defined in: [src/Logger.ts:218](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L218)

___

### verbose

▸ **verbose**(`component`: *string*, `message`: *any*, `metadata?`: *Record*<*any*, *any*\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`component` | *string* |
`message` | *any* |
`metadata?` | *Record*<*any*, *any*\> |

**Returns:** *void*

Defined in: [src/Logger.ts:233](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L233)

___

### warn

▸ **warn**(`component`: *string*, `message`: *any*, `metadata?`: *Record*<*any*, *any*\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`component` | *string* |
`message` | *any* |
`metadata?` | *Record*<*any*, *any*\> |

**Returns:** *void*

Defined in: [src/Logger.ts:243](https://github.com/arashijs/logger/blob/6f4dab1/src/Logger.ts#L243)

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:31

___

### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<*any*\>

Defined in: node_modules/@types/node/events.d.ts:28

___

### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* \| *symbol*): *Promise*<*any*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *NodeEventTarget* |
`event` | *string* \| *symbol* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:26

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<*any*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:27
