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
  @Prop() menuAppsItems: [];

  render() {
    return (
      <div class={this.type === 'grid' || this.type === undefined ? 'm-menu-apps m-menu-apps-grid' : this.type === 'list' ? 'm-menu-apps m-menu-apps-list' : null}>
        <m-dropdown type="text" label={this.label} show-label="false" icon="menu-apps-icon" icon-type="core" show-chevron="false">
          {this.menuAppsItems ? 
            this.menuAppsItems.map((item, index) =>
            <m-menu-apps-item innerHTML={item}></m-menu-apps-item>
            )
            : <slot />
          }
        </m-dropdown>
      </div>
    )
  }
}
