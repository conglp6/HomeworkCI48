import { BaseComponent } from "./BaseComponent.js"

class Manga extends BaseComponent {
    constructor() {
        super();
        // vì nội dung của 1 task do thuộc tính quyết định,
        //  mà thuộc tính được truyền từ ngòai vào --> props
        this.props = {
            "img": '',
            "name": '',
            "views": '',
            "likes": ''
        };
    }

    static get observedAttributes() {
        return ['img', 'name', 'views', 'likes'];
    }

    render() {
        this._shadowRoot.innerHTML = `
        <div class='manga'>
            <img src="${this.props["img"]}" />
            <div id='name'>${this.props["name"]}</div>
            <div id='views'>${this.props["views"]}</div>
            <div id='likes'>${this.props["likes"]}</div>
        </div>
        `;
    }
}

window.customElements.define('manga-container', Manga);