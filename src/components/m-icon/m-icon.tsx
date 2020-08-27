import { Component, h, Prop, getAssetPath, State } from '@stencil/core';

@Component({
  tag: 'm-icon',
  styleUrl: 'm-icon.scss',
  shadow: false,
  assetsDirs: ['icons'],
})
export class Icon {

  /**
   * The icon name
   */
  @Prop() name: string;

  /**
   * The icon style: regular, bold and filled
   */
  @Prop() type: string = 'regular';

  /**
   * The svg icon as string
   */
  @State() svg: string;

  /**
   * Icon tooltip
   */
  @Prop({ attribute: 'title' }) tooltip: string;

  /**
   * Function to fetch svg code
   */
  async connectedCallback() {
    const path = getAssetPath(`icons/${this.type}/${this.name}.svg`)
    const response = await fetch(path)
    this.svg = await response.text()
  }

  render() {
    return (
      <span innerHTML={this.svg} class={'m-icon i-' + this.name} title={this.tooltip}/>
    );
  } 
}
