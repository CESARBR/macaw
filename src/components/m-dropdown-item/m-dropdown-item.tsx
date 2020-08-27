import { Component, Prop, h, Listen, Method } from '@stencil/core';

@Component({
  tag: 'm-dropdown-item',
  styleUrl: 'm-dropdown-item.scss',
  shadow: true,
})
export class Item {

  render() {
    return (
      <li class="m-dropdown-item">
        <slot/>
      </li>
    );
  }
}
