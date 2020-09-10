import { BaseComponent } from "./BaseComponent.js";

class Meme extends BaseComponent {
    constructor() {
        super();
        this.props = {
            name: '',
            img: '',
            description: '',
            datemodified: ''
        };
    }
    static get observedAttributes() {
        return ["name", "img", "description", "datemodified"];
    }

    render() {
        this._shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./css/meme.css">
            
        <div class='meme'>
            <div id='name'>${this.props.name}</div>
            <img src=${this.props.img}>
            <div id='description'>${this.props.description}</div>
            <div id='datemodified'>${this.props.datemodified}</div>
        </div>
        `;
    }
}
window.customElements.define("meme-container", Meme);