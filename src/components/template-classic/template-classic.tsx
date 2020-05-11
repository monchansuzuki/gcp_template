import {Component, Prop, h} from '@stencil/core';
import {getImages} from "../../utils/mock-data";

@Component({
  tag: 'template-classic',
  styleUrl: 'template-classic.css',
  shadow: true
})
export class TemplateClassic {

  @Prop() tokken: string;

  fetch() {
    return getImages();

  }

  render() {
    return (<div class="panels">
      {this.fetch().map(post =>
        (<div class="panel">
          <div class="page1">
            <div class="back">
              <img class="img-resp" src={post.imgSrc} width={200} height={200}/>
            </div>
          </div>
          <div class="page2 open">
              <h1>{post.title}</h1>
              <p>{post.text}</p>
              <p>
                <span class="button">
                  {post.author}
                </span>
              </p>
            </div>
          </div>
        )
      )}
    </div>)

  }
}
