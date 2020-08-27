import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-header',
  styleUrl: 'm-header.scss',
  shadow: false,
})
export class Header {

  /**
   * Brand name
   */
  @Prop() brandName: string;

  /**
   * /** 
   * The logged user's avatar image URL or user name.
   */
  @Prop() avatarSource: string;

  /**
   * /** 
   * The logged user's name
   */
  @Prop() avatarName: string;

  render() {
    return (
      <header class='m-header'>
        <div class='m-header__left'>
          <slot name='brand-logo'></slot>
          {this.brandName ? <span class='m-header__brand-name'>{this.brandName}</span> : ''}
          <slot name='header-left'></slot>
        </div>

        <div class='m-header__right'>
          <slot name='header-right'></slot>
          <m-avatar class='m-header__avatar-image' source={this.avatarSource}></m-avatar>
          {this.avatarName ? <span class='m-header__avatar-name'>{this.avatarName}</span> : ''}
        </div>
      </header>
    );
  }
}
