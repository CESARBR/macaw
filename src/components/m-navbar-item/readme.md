# m-navbar-item

This is a magic navbar-item or not ;)


<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description             | Type      | Default     |
| -------- | --------- | ----------------------- | --------- | ----------- |
| `active` | `active`  | Whether item is active. | `boolean` | `undefined` |


## Dependencies

### Used by

 - [m-navbar](../m-navbar)

## Usage
There are two ways to use `<m-navbar>` component:
1. Single tag
HTML
```html
<m-navbar></m-navbar>
````
JavaScript
```javascript
// Binds DOM element in constant myNavbarInsideHeader
const myNavbarInsideHeader = document.querySelector('m-navbar');
// Pass an array of HTML items through navItems public property
myNavbarInsideHeader.navItems = ['<a href="index.html">Link 1</a>', '<a href="index.html">Link 2</a>','<a href="index.html">Link 3</a>', '<a href="index.html">Link 4</a>'];
````

2. Declarative
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

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
