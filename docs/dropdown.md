---
layout: default
title: Dropdown
nav_order: 13
description: ""
permalink: dropdown/
---
# Dropdown
{: .no_toc }

O `m-dropdown` é o menu dropdown acompanhado por um `m-button`.

## Exemplo

<m-dropdown label="Click me">
  <m-dropdown-item>
    First Item
  </m-dropdown-item>
  <m-dropdown-item>
    <a href="">Second Item</a>
  </m-dropdown-item>
</m-dropdown>

#### HTML
```html
<m-dropdown label="Click me">
  <m-dropdown-item>
    First Item
  </m-dropdown-item>
  <m-dropdown-item>
    <a href="">Second Item</a>
  </m-dropdown-item>
</m-dropdown>
```

## Propriedades

| Property | Attribute | Description             | Type     | Default     |
| -------- | --------- | ----------------------- | -------- | ----------- |
| `label`  | `label`   | Label do botão dropdown | `string` | `undefined` |


## Dependências

### Depende de

- [m-button](/button)
- [m-icon](/icons)
