﻿import '@webcomponents/webcomponentsjs';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import './carousel.less';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import { html, TemplateResult, render } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';

export class CarouselComponent extends HTMLElement {

    static get observedAttributes() { return ['items']; }

    private _items = [];

    private _guid = guid();

    connectedCallback() {
        
        render(this.template, this);

        $(`.carousel-${this._guid}`).owlCarousel({
            margin: 10,
            items:2,
            nav: true,
            navText: [
                "<a class='nav-btn prev-slide'><i class=' fa fa-angle-left '></i></a>",
                "<a class='nav-btn next-slide'><i class='fa fa-angle-right'></i></a>"],
            dots: false
        });
    }

    get template(): TemplateResult {
        return html`
            <div class="carousel-${this._guid} owl-carousel">
                ${repeat(this._items, i => this.getItemTemplate(i))}
            </div>
        `;
    }

    getItemTemplate(vm):TemplateResult {
        return html`
            <div class="carousel__item">
                <img src="${vm.imageUrl}" />
            </div>`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == "items")
            this._items = JSON.parse(newValue);
    }
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

window.customElements.define("ce-carousel", CarouselComponent);

