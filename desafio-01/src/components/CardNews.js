class CardNews extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "closed" });
		const title = document.createElement("h1");
		title.textContent = this.getAttribute("title");

		shadow.appendChild(this.build());
		shadow.appendChild(this.styles());
	}
	build() {
		const root = document.createElement("div");
		root.setAttribute("class", "card");

		const cardLeft = document.createElement("div");
		cardLeft.setAttribute("class", "card-left");

		const author = document.createElement("span");
		author.setAttribute("id", "author");
		author.textContent = `Por ${this.getAttribute("author") || `anônimo`}`;

		const title = document.createElement("h1");
		title.setAttribute("id", "title");
		title.textContent = `${this.getAttribute("title")}`;

		const description = document.createElement("p");
		description.setAttribute("id", "description");
		description.textContent = `${this.getAttribute("description")}`;

		const cardRight = document.createElement("div");
		cardRight.setAttribute("class", "card-right");

		const img = document.createElement("img");
		img.setAttribute("src", "./assets/Behemoth-Knotfest-MattStasi-4248.jpg");
		img.setAttribute("width", 280);

		cardLeft.appendChild(author);
		cardLeft.appendChild(title);
		cardLeft.appendChild(description);

		cardRight.appendChild(img);

		root.appendChild(cardLeft);
		root.appendChild(cardRight);
		return root;
	}

	styles() {
		const css = document.createElement("style");
		css.textContent = `
            .container {
                padding: 20px;
                margin:auto;
            }
            
            .card {
                width: 99%;
                margin: 20px 20px 0px 20px;
                display: flex;
                box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
            
            .card .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
                padding-bottom: 20px;
            }
            
            .card .card-left > h1 {
                font-size: 20px;
            }
            
            .card .card-left #author {
                margin: 15px 0px;
                font-weight: bold;
            }
            
            .card .card-left #description {
                color:gray;
            }

            .card .card-right {
                padding: 20px 20px 20px;
            }
        `;
		return css;
	}
}

customElements.define("card-news", CardNews);
