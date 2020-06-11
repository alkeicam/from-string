# from-string
> Converting string data into its corresponding javascript types

## Table of contents
* [General info](#general-info)
* [Mappings](#mappings)

## General info
from-string allows to change string representations of arrays, numbers, booleans into its corresponding values. I.e. having "2" it will result with 2 returned.


### function: parse(stringValue)
```javascript
var number2  = theModule.parse("2");
var number222  = theModule.parse("2.22");
```

|Kind| Parameter | Type | Description |
| :--- | :--- | :--- | :--- |
|Argument| `stringValue` | `string` | **Required**. String data that will be converted to corresponding data type value |
|Returns|   | `object|array|string|number|boolean` | Object or type representing given string value|

## Mappings
|Sample Input| Result Type | Result | 
| :--- | :--- | :--- | 
|"2"| `number` | 2 | 
|"2.3"| `number` | 2.3 | 
|".2"| `number` | 0.2 |
|"testing one two three"| `string` | "testing one two three" |
|undefined| `undefined` | undefined | 
|null| `undefined` | undefined | 
|"[1,2,3]"| `array<number>` | [1,2,3] |
|"["a","b","c"]"| `array<string>` | ["a","b","c"] |
|"false"| `boolean` | false |
|"true"| `boolean` | true |



