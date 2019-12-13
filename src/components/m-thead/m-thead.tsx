import { Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'm-thead',
  styleUrl: 'm-thead.scss',
  shadow: true,
})
export class MThead {
  /**
   * Table Header
   */
  @Prop() header: [];

  render() {
    return (
      <tr>
        {this.header.map(({title}) =>
          <th class='m-thead__cell'>{title}</th>
        )}
      </tr>
    );
  }
}
