import { Component, Prop, h, Listen, Method } from '@stencil/core';

@Component({
  tag: 'm-button',
  styleUrl: 'm-button.scss',
  shadow: true,
})
export class Button {

  /**
   * Button tooltip
   */
  @Prop({ attribute: 'title' }) tooltip: string;

  /**
   * Disable button
   */
  @Prop({ mutable: true }) disabled: boolean = false;

  /**
   * Event click
   */
  @Listen('click', { capture: true })
  handleClick(event: UIEvent) {
    if (this.disabled) {
      event.stopPropagation();
    }
  }

  /**
   * Method showPrompt
   */
  @Method()
  async myTip() {
    return this.tooltip;
  }

  render() {
    return (
      <button title={this.tooltip} disabled={this.disabled}><slot /></button>
    );
  }
}
