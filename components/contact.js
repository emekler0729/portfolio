class ContactFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="footer py-5 text-center" id="contact">
                <a href="https://www.fiverr.com/emekler0729"><img src="images/fiverr-icon.svg" class="footer__icon" alt=""></a>
                <p class="text-dark my-3">Copyright 2021 All rights reserved</p>
            </footer>
        `;
    }
}

customElements.define('contact-footer', ContactFooter);