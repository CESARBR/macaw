import { Component, Prop, State, h, Event } from '@stencil/core';

@Component({
  tag: 'm-dropdown',
  styleUrl: 'm-dropdown.scss',
  shadow: true,
})
export class Dropdown {

  /**
   * Dropdown label
   */
  @Prop({ attribute: 'label' }) label: string;

  @State() open: boolean;

  handleClick(event: UIEvent) {
    this.open = !this.open;
  }

  render() {
    return (
      <div class="dropdown">
        <m-button onClick={(event: UIEvent) => this.handleClick(event)}>
          {this.label} <span class={'icon ' + (this.open ? '' : 'icon--closed')}></span>
        </m-button>
        <div class={'dropdown__content ' + (this.open ? 'dropdown__content--show' : '')}>
          <ul class="list-items" onClick={(event: UIEvent) => this.handleClick(event)}>
            <slot/>
          </ul>
        </div>
      </div>
    );
  }
}
