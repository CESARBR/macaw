---
layout: default
title: Navbar
nav_order: 13
description: ""
permalink: navbar/
---
# Navbar
{: .no_toc }

O `m-navbar` é o componente de navegação horizontal do Macaw.

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
// Defina o índice do item selecionado inicialmente.
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

| Property        | Attribute         Description                | Type      | Default     |
|-----------------|-----------------|----------------------------|-----------|-------------|
| `active`        | `active`        | Se o item está ativo       | `boolean` | `undefined` |
| `navItems`      | --              | Items da navbar            | `[]`      | `undefined` |
| `selectedIndex` | `selectedIndex` | Índice do item selecionado | `number`  | `0`         |


## Dependências

### Depende de

- [m-navbar-item](/navbar-item)