import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'm-menu-apps',
  styleUrl: 'm-menu-apps.scss',
  shadow: false
})

export class MenuApps {

  /**
  * Alternative description.
  */
  @Prop({ attribute: 'alt' }) altDesc: string;

  /**
  * State of menu (opened or closed)
  */
  @State() open: boolean;

  /**
   * Menu Item items data.
   */
  @Prop() menuItems: [];

  render() {
    return (
      <div class="m-menu-apps">
        <m-dropdown type="text" icon="menu-apps-icon" iconType="core" show-chevron="false">
          {this.menuItems ? 
            this.menuItems.map((item, index) =>
            <m-menu-apps-item innerHTML={item}></m-menu-apps-item>
            )
            : <slot />
          }
        </m-dropdown>
      </div>
    )
  }
}
