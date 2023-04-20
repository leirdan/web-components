class CardNews extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "closed" });
		const title = document.createElement("h1");
		title.textContent = `Hello world!`;
		shadow.appendChild(title);
	}
}

customElements.define("card-news", CardNews);
