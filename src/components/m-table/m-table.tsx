import { Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'm-table',
  styleUrl: 'm-table.scss',
  shadow: true,
})
export class MTable {
  /**
   * Data Table
   */
  @Prop() data: [];

  /**
   * Table Headers
   */
  @Prop() dataHeaders: [];

  /**
   * Table Strip
   */
  @Prop({ mutable: true }) strip: boolean = false;

  render() {
    return (
      <table class={'m-table ' + (this.strip ? 'table-strip' : '' )}>
        <m-thead class='m-thead' header={this.dataHeaders}/>
        <m-tbody class='m-tbody' header={this.dataHeaders} body={this.data}/>
      </table>
    );
  }
}
