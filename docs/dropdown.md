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

<div style="background-color: #ffe5e5; padding: 20px; font-size: 14px; border-radius: 5px; margin: 20px 0;">
  Devido a problemas de compatibilidade com o GitHub Pages, o componente abaixo não pode ser gerado via código para documentação. 
  <br/>
  <br/>
  Mas você pode usá-lo no seu ambiente normalmente enquanto investigamos isso. :) 
</div>

<img src="../assets/images/mcw-dropdown.gif" width="250">

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
