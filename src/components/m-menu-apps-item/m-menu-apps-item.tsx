import { Component, h } from '@stencil/core';

@Component({
  tag: 'm-menu-apps-item',
  styleUrl: 'm-menu-apps-item.scss',
  shadow: false
})

export class MenuAppsItem {
  render() {
    return (
      <li class="m-menu-apps-item" role="menuitem">
        <slot/>
      </li>
    )
  }
}
