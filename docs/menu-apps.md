---
layout: default
title: Menu Apps
nav_order: 16
description: ""
permalink: menu-apps/
---
# Menu Apps
{: .no_toc }

O `m-menu-apps` é o componente de menu de aplicativos do Macaw.

## Exemplo
<style>
    .page-content .m-navbar__list {
        padding: 0;
    }
    .page-content .m-navbar__list .m-navbar__list-item,
    .page-content .m-navbar__list .m-navbar__list-item--active {
        margin: 0;
    }
    .page-content .m-navbar__list .m-navbar__list-item a,
    .page-content .m-navbar__list .m-navbar__list-item--active a {
        background-image: none;
        overflow: unset;
        text-overflow: unset;
        white-space: unset;
        background-repeat: unset;
        background-position: unset;
        background-size: unset;
    }
</style>
<m-navbar></m-navbar>

<m-navbar>
  <m-navbar-item active="true">
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

<script>
    const myNavbarInsideHeader = document.querySelector('m-navbar');
    myNavbarInsideHeader.navItems = ['<a href="index.html">Link 1</a>', '<a href="index.html">Link 2</a>','<a href="index.html">Link 3</a>', '<a href="index.html">Link 4</a>'];
</script>

## Uso
Existem duas formas de instanciar o componente `<m-navbar>`:
### 1. Tag simples
HTML
```html
<m-navbar></m-navbar>
```
JavaScript
```javascript
// Atribua um elemento DOM a uma constante
const myNavbar = document.querySelector('m-navbar');
// Passe um array de itens HTML para a propriedade pública navItems.
myNavbar.navItems = ['<a href="index.html">Link 1</a>', '<a href="index.html">Link 2</a>','<a href="index.html">Link 3</a>', '<a href="index.html">Link 4</a>'];
myNavbar.selectedIndex = 4;
```

### 2. Declarativa
HTML
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

| Property        | Attribute         | Description              | Type     | Default     |
| --------------- | ----------------- | ------------------------ | -------- | ----------- |
| `label`         | `label`           | Menu label               | `string` | `undefined` |
| `menuItemsJson` | `menu-items-json` | Menu Item items data.    | `string` | `undefined` |
| `type`          | `type`            | Menu type (grid or list) | `string` | `'grid'`    |


### Depende de

- [m-menu-apps-item](../m-menu-apps-item)
- [m-dropdown](../m-dropdown)