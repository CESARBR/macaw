import { Component, h } from '@stencil/core';

@Component({
  tag: 'm-dropdown-item',
  styleUrl: 'm-dropdown-item.scss',
  shadow: false,
})
export class Item {

  render() {
    return (
      <li class="m-dropdown-item" role="menuitem">
        <slot/>
      </li>
    );
  }
}
