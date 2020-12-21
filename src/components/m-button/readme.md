# m-button

This is a magic button or not ;)


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                      | Type      | Default     |
| ---------- | ---------- | -------------------------------- | --------- | ----------- |
| `disabled` | `disabled` | Disable button                   | `boolean` | `false`     |
| `tooltip`  | `title`    | Button tooltip                   | `string`  | `undefined` |
| `type`     | `type`     | Button type. "text" or "primary" | `string`  | `'primary'` |


## Methods

### `myTip() => Promise<string>`

Method showPrompt

#### Returns

Type: `Promise<string>`




## Dependencies

### Used by

 - [m-dropdown](../m-dropdown)

### Graph
```mermaid
graph TD;
  m-dropdown --> m-button
  style m-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
