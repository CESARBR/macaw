import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'm-menu-apps',
  styleUrl: 'm-menu-apps.scss',
  shadow: false
})

export class MenuApps {

  /**
   * Menu label
   */
  @Prop() label: string;

  /**
   * Menu label
   * Default type: grid
   */
  @Prop() type: string;

  /**
  * State of menu (opened or closed)
  */
  @State() open: boolean;

  /**
   * Menu Item items data.
   */
  @Prop() menuItemsJSON: string;

  render() {
    let menuData = this.menuItemsJSON ? JSON.parse(this.menuItemsJSON) : '',
        mostUsedItems, commonItems, partnersItems;

    if(menuData) {
      if(menuData.mostUsed) {
        mostUsedItems = menuData.mostUsed.map((item) =>
          <m-menu-apps-item link={item.link} img-src={item.imgSrc} img-alt={item.imgAlt}>{item.itemContent}</m-menu-apps-item>
        )
      }

      if(menuData.common) {
        commonItems = menuData.common.map((item) =>
          <m-menu-apps-item link={item.link} img-src={item.imgSrc} img-alt={item.imgAlt}>{item.itemContent}</m-menu-apps-item>
        )
      }

      if(menuData.partners) {
        partnersItems = menuData.partners.map((item) =>
          <m-menu-apps-item link={item.link} img-src={item.imgSrc} img-alt={item.imgAlt}>{item.itemContent}</m-menu-apps-item>
        )
      }
    }

    return (
      <div class={this.type === 'grid' || this.type === undefined ? 'm-menu-apps m-menu-apps-grid' : this.type === 'list' ? 'm-menu-apps m-menu-apps-list' : null}>
        <m-dropdown type="text" label={this.label} show-label="false" icon="menu-apps-icon" icon-type="core" show-chevron="false">
          {mostUsedItems ? mostUsedItems : null}
          {mostUsedItems ? <hr /> : null}
          {commonItems ? commonItems : null}
          {partnersItems ? <h3>Sistemas Parceiros</h3> : null}
          {partnersItems ? partnersItems : null}
          {!menuData ? <slot /> : null}
        </m-dropdown>
      </div>
    )
  }
}
