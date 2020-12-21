# m-menu-apps

This is a magic avatar or not ;)


<!-- Auto Generated Below -->


## Properties

| Property        | Attribute            | Description                   | Type     | Default     |
| --------------- | -------------------- | ----------------------------- | -------- | ----------- |
| `label`         | `label`              | Menu label                    | `string` | `undefined` |
| `menuItemsJSON` | `menu-items-j-s-o-n` | Menu Item items data.         | `string` | `undefined` |
| `type`          | `type`               | Menu label Default type: grid | `string` | `undefined` |


## Dependencies

### Depends on

- [m-menu-apps-item](../m-menu-apps-item)
- [m-dropdown](../m-dropdown)

### Graph
```mermaid
graph TD;
  m-menu-apps --> m-menu-apps-item
  m-menu-apps --> m-dropdown
  m-dropdown --> m-button
  m-dropdown --> m-avatar
  m-dropdown --> m-icon
  style m-menu-apps fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
