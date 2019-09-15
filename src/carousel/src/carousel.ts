import './carousel.less';

import { html, TemplateResult, render } from 'lit-html';

export class CarouselComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        render(this.template, this.shadowRoot);
    }

    get template(): TemplateResult {
        return html`

        `;
    }
}

window.customElements.define("ce-carousel", CarouselComponent);

