class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let isIndex = this.hasAttribute('data-em-index');
        let path = isIndex ? '' : 'index.html';

        this.innerHTML = `
            <div class="container-fluid px-md-5">
                <a href="index.html" class="navbar-brand">Eduard Mekler</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-md-end" id="navbarNav">
                    <div class="navbar-nav">
                        <a href="${path}#services" class="nav-link">Services</a>
                        <a href="${path}#projects" class="nav-link mx-md-2">Projects</a>
                        <a href="#contact" class="nav-link mx-md-2">Contact</a>
                    </div>
                </div>
            </div>
        `;

        this.classList.add('navbar', 'navbar-expand-md', 'navbar-light', 'bg-white')
    }
}

customElements.define('portfolio-nav', Navbar);