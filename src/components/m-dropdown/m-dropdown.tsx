import { Component, Prop, h, Listen, Method } from '@stencil/core';

@Component({
  tag: 'm-dropdown',
  styleUrl: 'm-dropdown.scss',
  shadow: true,
})
export class Button {

  /**
   * Dropdown label
   */
  @Prop({ attribute: 'label' }) label: string;


  render() {
    return (
      <div class="dropdown">
        <m-button>
          {this.label}
        </m-button>
        <div class="dropdown__content">
          <ul class="list-items">
            <slot/>
          </ul>
        </div>
      </div>
    );
  }
}
