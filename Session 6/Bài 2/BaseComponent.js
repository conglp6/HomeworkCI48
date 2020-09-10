class BaseComponent extends HTMLElement {
    props;
    state;
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this.props = {};
        this.state = {};
    }

    connectedCallback() {
        this.render();
        this.componentDidMount();

    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.props[name] = newValue;
        this.render();
        this.componentDidUpdate();
    }

    disconnectedCallback() {
        this.componentWillUnmount();
    }

    setState(newState) {
        this.state = newState;
        this.render();
        this.componentDidUpdate();
    }
    /**
     * In html ra ngoài màn hình
     * Gắn sự kiện cho các thẻ
     */
    render() {

    }

    /**
     * Được gọi khi component sinh ra
     * Gọi 1 lần duy nhất
     */
    componentDidMount() {

    }

    /**
     * Đc gọi sau khi props hoặc state thay đổi, sau khi render
     */
    componentDidUpdate() {

    }

    /**
     * Được gọi trước khi component biến mất
     */
    componentWillUnmount() {

    }
}

export { BaseComponent };