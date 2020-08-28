---
layout: default
title: Navbar
nav_order: 14
description: ""
permalink: navbar/
---
# Navbar
{: .no_toc }

O `m-navbar` é o componente de navegação horizontal do Macaw.

## Exemplo

<m-navbar>
    <m-navbar-item active=true>
        <a href="index.html">Link 1</a>
    </m-navbar-item>
    <m-navbar-item>
        <a href="index.html">Link 2</a>
    </m-navbar-item>
    <m-navbar-item>
        <a href="index.html">Link 3</a>
    </m-navbar-item>
    <m-navbar-item>
        <a href="index.html">Link 4</a>
    </m-navbar-item>
    <m-navbar-item>
        <a href="index.html">Link 5</a>
    </m-navbar-item>
</m-navbar>

#### HTML
```html
<m-navbar>
    <m-navbar-item active=true>
        <a href="index.html">Link 1</a>
    </m-navbar-item>
    <m-navbar-item>
        <a href="index.html">Link 2</a>
    </m-navbar-item>
    <m-navbar-item>
        <a href="index.html">Link 3</a>
    </m-navbar-item>
    <m-navbar-item>
        <a href="index.html">Link 4</a>
    </m-navbar-item>
    <m-navbar-item>
        <a href="index.html">Link 5</a>
    </m-navbar-item>
</m-navbar>
```

## Propriedades

| Property        | Attribute        | Description                    | Type      | Default     |
| --------------- | ---------------- | ------------------------------ | --------- | ----------- |
| `active`        | `active`         | Se o item está ativo           | `boolean` | `undefined` |
| `navItems`      | --               | Items da navbar                | `[]`      | `undefined` |
| `selectedIndex` | `selected-index` | Índice do item selecionado     | `number`  | `0`         |


## Dependências

### Depende de

- [m-navbar-item](/navbar-item)