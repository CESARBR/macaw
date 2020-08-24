import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'm-navbar',
  styleUrl: 'm-navbar.scss',
  shadow: false,
})
export class Navbar {
  /**
   * Navbar items.
   */
  @Prop() navItems: [];

  /** 
   * Index of selected Navbar item.
   */
  @Prop() selectedIndex: number = 0;

  @Element() selectedElement: HTMLElement;

  render() {
    return (
      <nav class="m-navbar" role="navigation">
        <ul class="m-navbar__list">
          {this.navItems
            ? this.navItems.map((item, index) =>
              <li class={this.selectedIndex === index ? 'm-navbar__list-item--active' : 'm-navbar__list-item'} innerHTML={item}></li>
            )
            : <slot />
          }
        </ul>
        <span class="m-navbar__list-item-indicator"></span>
      </nav>
    );
  }

  componentDidLoad() {
    // Defines width and position of item selected indicator.
    const activeItem = this.selectedElement.querySelector('.m-navbar__list-item--active');
    const activeItemIndicator = this.selectedElement.querySelector('.m-navbar__list-item-indicator');
    let activeItemWidth = (activeItem as HTMLElement).offsetWidth + 'px';
    let activeItemLeft = (activeItem as HTMLElement).offsetLeft + 'px';
    activeItemIndicator.setAttribute('style', 'width: ' + activeItemWidth +'; left: ' + activeItemLeft);
  }
}
