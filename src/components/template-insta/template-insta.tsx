import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {getImages} from "../../utils/mock-data";

@Component({
  tag: 'template-insta',
  styleUrl: 'template-insta.css',
  shadow: true,
})
export class TemplateInsta implements ComponentInterface {

  @Prop() tokken: string;
  @Prop() headerTitle: string;

  fetch() {
    return getImages();
  }

  render() {
    return (
      <div>
        <div>{this.headerTitle}</div>
        <div>

          {this.fetch().map(post => {
            return (
              <div>

                {post.text}
              </div>
            )
          })}
        </div>

      </div>
    );
  }

}
