import { Component, Prop, State, h } from '@stencil/core';

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
  @Prop({ attribute: 'icon' }) icon: string;

  /**
   * Icon type to display
   */
  @Prop({ attribute: 'iconType' }) iconType: string;

  /**
   * Dropdown button type. "text" or "primary"
   */
  @Prop({ reflect: true }) type: string = 'primary';

  /**
   * Dropdown label
   */
  @Prop({ attribute: 'label' }) label: string;

  /**
   * Whether the dropdown is open or not
   */
  @State() open: boolean;

  handleClick() {
    this.open = !this.open;
  }

  render() {
    return (
      <div class="m-dropdown">
        <m-button type={this.type} onClick={() => this.handleClick()}>
          {this.avatarSource ? <m-avatar source={this.avatarSource} ></m-avatar> : ""}
          {this.label}
          {this.icon ? <m-icon type={this.iconType} name={this.icon} /> : ""}
          {this.showChevron ? <m-icon name="chevron-bottom" class={'icon ' + (this.open ? '' : 'icon--closed')} /> : ""}
        </m-button>
        <div class={'m-dropdown__content ' + (this.open ? 'm-dropdown__content--show' : '')}>
          <ul class="list-items" onClick={() => this.handleClick()}>
            <slot/>
          </ul>
        </div>
      </div>
    );
  }
}
