import { r as registerInstance, h } from './index-f1cb2b6e.js';
import { g as getImages } from './mock-data-becaac10.js';

const templateClassicCss = ":host{display:block}.container{display:flex;flex-direction:row}:root{--color:#47469b;--radius:8px;color:#445544}.panel:nth-child(1){--color:#47469B}.panel:nth-child(2){--color:#E35E60}.panel:nth-child(3){--color:#66CBB1}.panel:nth-child(4){--color:#E87E83}.panels{display:flex;justify-content:center;padding:40px;transform-style:preserve-3d}.panel{display:flex;width:200px;margin:20px 40px;transition:all 1s;perspective:600px}.panel:hover,.panel.open{width:400px}.panel:hover .page1,.panel.open .page1{margin-left:0;transform:rotateY(0deg)}[class^=\"page\"]{display:flex;justify-content:center;flex-direction:column;width:200px;height:200px;flex-shrink:0;border:2px solid var(--color);border-radius:var(--radius);box-shadow:0 2px 4px -2px rgba(0, 0, 0, .1), 0 4px 8px -4px rgba(0, 0, 0, .12), 0 8px 16px -8px rgba(0, 0, 0, .15), 0 16px 24px -16px rgba(0, 0, 0, .17), 0 24px 48px -24px rgba(0, 0, 0, .25)}.page1{position:relative;margin-left:-200px;transform-origin:100% 50%;transform-style:preserve-3d;transition:all 1s;transform:rotateY(180deg);background:var(--color)}.front,.back{position:absolute;width:100%;height:100%;backface-visibility:hidden}.back{overflow:hidden;background:var(--color);border-radius:var(--radius)}.front{background:white;transform:rotateY(180deg);border-radius:var(--radius)}.front::before{content:'';position:absolute;top:0;right:0;left:0;bottom:0;background:var(--color);clip-path:polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)}h1{flex-basis:100%;margin:0;padding:14px 16px 4px;font-size:1.2em;font-weight:500;text-align:center;background:var(--color);color:white}p{padding:16px 16px;margin:0;font-size:.875em;line-height:1.4}p+p{padding-top:4px}.button{display:flex;justify-content:center;padding:12px 16px;font-size:.875em;text-transform:uppercase;letter-spacing:1px;font-weight:500;color:#FFF;background-color:var(--color);text-decoration:none;border-radius:4px}body,html{height:100%}body{display:flex;justify-content:center;align-items:center}";

const TemplateClassic = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    fetch() {
        return getImages();
    }
    render() {
        return (h("div", { class: "panels" }, this.fetch().map(post => (h("div", { class: "panel" }, h("div", { class: "page1" }, h("div", { class: "back" }, h("img", { class: "img-resp", src: post.imgSrc, width: 200, height: 200 }))), h("div", { class: "page2 open" }, h("h1", null, post.title), h("p", null, post.text), h("p", null, h("span", { class: "button" }, post.author))))))));
    }
};
TemplateClassic.style = templateClassicCss;

export { TemplateClassic as template_classic };
