import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-menu-apps-item',
  styleUrl: 'm-menu-apps-item.scss',
  shadow: false
})

export class MenuAppsItem {
  /**
   * Menu item link
   */
  @Prop() link: string;

  /**
   * Menu item image source
   */
  @Prop() imgSrc: string;

  /**
   * Menu item image alternate description
   */
  @Prop() imgAlt: string;

  /**
   * Menu item caption
   */
  @Prop() itemName: string;

  render() {
    return (
      <li class="m-menu-apps-item" role="menuitem">
        <a href={this.link}>
            <figure>
              <span>
                <img src={this.imgSrc} alt={this.imgAlt} />
              </span>
              <figcaption><slot /></figcaption>
            </figure>
          </a>
      </li>
    )
  }
}
