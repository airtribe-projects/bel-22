# JavaScript Data Types

JavaScript data types are broadly divided into:

| Category                  | Meaning                    |
| ------------------------- | -------------------------- |
| Primitive Types           | Simple immutable values    |
| Reference Types (Objects) | Complex mutable structures |


# Big Picture

```text
JavaScript Values
    ├── Primitive Types
    └── Objects / Reference Types
```


| Primitive Types                  | Reference Types             |
| -------------------------------- | --------------------------- |
| Simple values                    | Complex structures          |
| Immutable                        | Mutable                     |
| Compared by value                | Compared by reference       |
| Stored directly (conceptually)   | Stored via references       |
| Lightweight                      | Heavier                     |
| No custom properties persistence | Can hold properties/methods |

# Primitive Types

JavaScript has 7 primitive types.

| Primitive Type | Example        |
| -------------- | -------------- |
| Number         | `42`           |
| String         | `"hello"`      |
| Boolean        | `true`         |
| Undefined      | `undefined`    |
| Null           | `null`         |
| Symbol         | `Symbol("id")` |
| BigInt         | `123n`         |


# Undefined 
* Variable exists but no value has been assigned yet

let x;


