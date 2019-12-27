import { Component, Prop, h } from '@stencil/core';
import { validURL, imageExtensions } from '../../utils/utils';

@Component({
  tag: 'm-avatar',
  styleUrl: 'm-avatar.scss',
  shadow: true,
})
export class Avatar {

  /** 
   * Image URL or user name.
   */
  @Prop() source: string;

  /**
   * Alternative description.
   */
  @Prop({ attribute: 'alt' }) altDesc: string;

  /**
   * Get initials of first and last names from a given string.
   */
  getInitials (string: string): string {
    let names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
}

  render() {
    if(validURL(this.source)) {
      if(this.source.match(imageExtensions) !== null) {
        return (
          <img class="m-avatar m-avatar__image" src={this.source} alt={this.altDesc} />
        )
      } else {
        return (
          console.error("URL doesn't target to an image file.")
        )
      } 
    } else {
      return (
        <span class="m-avatar m-avatar__initials">{this.getInitials(this.source)}</span>
      )
    }
  }
}
