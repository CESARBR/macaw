import { Component, Prop, State, h, Event } from '@stencil/core';

@Component({
  tag: 'm-dropdown',
  styleUrl: 'm-dropdown.scss',
  shadow: false,
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
      <div class="m-dropdown">
        <m-button onClick={(event: UIEvent) => this.handleClick(event)}>
          {this.label}  <m-icon name="chevron-bottom" class={'icon ' + (this.open ? '' : 'icon--closed')} />
        </m-button>
        <div class={'m-dropdown__content ' + (this.open ? 'm-dropdown__content--show' : '')}>
          <ul class="list-items" onClick={(event: UIEvent) => this.handleClick(event)}>
            <slot/>
          </ul>
        </div>
      </div>
    );
  }
}
