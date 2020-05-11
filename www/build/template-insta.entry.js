import { r as registerInstance, h } from './index-f1cb2b6e.js';
import { g as getImages } from './mock-data-becaac10.js';

const templateInstaCss = ":host{display:block}";

const TemplateInsta = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    fetch() {
        return getImages();
    }
    render() {
        return (h("div", null, h("div", null, this.headerTitle), h("div", null, this.fetch().map(post => {
            return (h("div", null, post.text));
        }))));
    }
};
TemplateInsta.style = templateInstaCss;

export { TemplateInsta as template_insta };
