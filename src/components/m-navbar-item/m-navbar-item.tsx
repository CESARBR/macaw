import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'm-navbar-item',
  styleUrl: 'm-navbar-item.scss',
  shadow: false,
})
export class Navbar {
  /** 
   * Index of selected Navbar item.
   */
  @Prop({ attribute: 'active' }) isActive: boolean;

  render() {
    return (
      <li class={this.isActive === true ? 'm-navbar__list-item--active' : 'm-navbar__list-item'}><slot /></li>
    );
  }
}
