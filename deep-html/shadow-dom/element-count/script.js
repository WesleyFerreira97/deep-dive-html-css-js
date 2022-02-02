class newShadow extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    get count() {
        return this.getAttribute('count') || 0;
    }

    set count(val) {
        this.setAttribute('count', val);
    }

    static get observedAttributes() {
        return ['count'];
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        if(prop === "count") {
            this.render();
            let btn = this.shadow.querySelector("#btn");
            btn.addEventListener("click", this.inc.bind(this));
        }
    }

    inc() {
        this.count++;
    }

    connectedCallback() {
        this.render();
        let btn = this.shadow.querySelector("#btn");
        btn.addEventListener("click", this.inc.bind(this));
    }

    render() {
        this.shadow.innerHTML = `
            <h1>New Shadow</h1>
            ${this.count}
            <button id='btn'>Increment</button>
        `;
    }
}

customElements.define("new-shadow", newShadow);