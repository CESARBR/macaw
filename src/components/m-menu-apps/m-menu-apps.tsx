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
  * State of menu (opened or closed)
  */
  handleClick() {
    this.open = !this.open;
  }

  /**
   * Menu Item items data.
   */
  @Prop() menuItems: [];

  render() {
    return (
      <div class="m-menu-apps" onClick={() => this.handleClick()}>
        <button class="m-menu-apps__button">
        <m-icon type="core" name="menu-apps-icon"></m-icon>
        </button>
        <div class={'m-menu-apps__content ' + (this.open ? 'm-menu-apps__content--show' : '')}  onClick={() => this.handleClick()}>
          {this.menuItems ? 
            this.menuItems.map((item, index) =>
            <m-menu-apps-item innerHTML={item}></m-menu-apps-item>
            )
            : <slot />
          }
        </div>
      </div>
    )
  }
}
