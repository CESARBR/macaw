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
  @Prop() menuAppsLabel: string;

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
      <div class="m-menu-apps" id="menu-apps">
        <m-dropdown type="text" label={this.menuAppsLabel} show-label="false" icon="menu-apps-icon" iconType="core" show-chevron="false">
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
