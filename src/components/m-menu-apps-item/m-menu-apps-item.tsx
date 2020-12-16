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
  @Prop() menuAppsItemLink: string;

  /**
   * Menu item image source
   */
  @Prop() menuAppsItemImgSrc: string;

  /**
   * Menu item image alternate description
   */
  @Prop() menuAppsItemImgAlt: string;

  /**
   * Menu item caption
   */
  @Prop() menuAppsItemCaption: string;


  render() {
    return (
      <li class="m-menu-apps-item" role="menuitem">
        <a href={this.menuAppsItemLink}>
            <figure>
              <span>
                <img src={this.menuAppsItemImgSrc} alt={this.menuAppsItemImgAlt} />
              </span>
              <figcaption innerHTML={this.menuAppsItemCaption}></figcaption>
            </figure>
          </a>
      </li>
    )
  }
}
