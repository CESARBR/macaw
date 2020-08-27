import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'm-navbar-item',
  styleUrl: 'm-navbar-item.scss',
  shadow: false,
})
export class Navbar {
  /** 
   * Whether item is active.
   */
  @Prop({ attribute: 'active' }) active: boolean;

  render() {
    return (
      <li class={this.active === true ? 'm-navbar__list-item--active' : 'm-navbar__list-item'}><slot /></li>
    );
  }
}
