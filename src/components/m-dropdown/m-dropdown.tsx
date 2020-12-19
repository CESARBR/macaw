import { Component, Prop, State, h } from '@stencil/core';
import { setUniqueID } from '../../utils/utils';
import { ClickOutside } from "stencil-click-outside";

@Component({
  tag: 'm-dropdown',
  styleUrl: 'm-dropdown.scss',
  shadow: false,
})
export class Dropdown {

  /**
   * The logged user's avatar image URL or user name.
   */
  @Prop() avatarSource: string;

  /**
   * Whether to display the chevron icon or not
   */
  @Prop({ mutable: true }) showChevron: boolean = true;

  /**
   * Icon to display
   */
  @Prop() icon: string;

  /**
   * Icon type to display
   */
  @Prop() iconType: string;

  /**
   * Dropdown button type. "text" or "primary"
   */
  @Prop({ reflect: true }) type: string = 'primary';

  /**
   * Dropdown label
   */
  @Prop() label: string;

  /**
   * Whether to display the button label or not. In case of using image or icon
   * it's still need to provide a button label for accessibility reasons.
   */
  @Prop({ mutable: true }) showLabel: boolean = true;


  /**
   * Whether the dropdown is open or not
   */
  @State() open: boolean;

  /**
   * Set open attribute value to control menu display
   */
  handleClick() {
    this.open = !this.open;
  }

  /**
   * Close menu when click outside
   */
  @ClickOutside()
  closeMenuIfClickOutside() {
    this.open = false;
  }

  /**
   * Unique ID.
   */
  @Prop() dropdownButtonID: string = 'mID-' + setUniqueID();

  render() {
    return (
      <div class="m-dropdown" role="menu">
        <m-button type={this.type} onClick={() => this.handleClick()} id={this.dropdownButtonID}>
          {this.avatarSource ? <m-avatar source={this.avatarSource} ></m-avatar> : ''}
          <span class={!this.showLabel ? 'm-dropdown__invisible-label' : null}>{!this.label ? 'Menu Dropdown' : this.label}</span>
          {this.icon ? <m-icon type={this.iconType} name={this.icon} /> : ""}
          {this.showChevron ? <m-icon name="chevron-bottom" class={'icon ' + (this.open ? '' : 'icon--closed')} /> : ""}
        </m-button>
        <div class={'m-dropdown__content ' + (this.open ? 'm-dropdown__content--show' : '')}>
          <ul class="list-items" onClick={() => this.handleClick()} aria-labelledby={this.dropdownButtonID}>
            <slot/>
          </ul>
        </div>
      </div>
    );
  }
}
