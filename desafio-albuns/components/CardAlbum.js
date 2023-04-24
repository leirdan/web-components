class CardAlbum extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "closed" });
		shadow.appendChild(this.build());
		shadow.appendChild(this.styles());
	}

	build() {
		const root = document.createElement("div");

		const cards = document.createElement("div");
		cards.setAttribute("class", "cards");

		const card = document.createElement("div");
		card.setAttribute("class", "card");

		const top = document.createElement("div");
		top.setAttribute("class", "card-top");

		const albumImg = document.createElement("img");
		albumImg.setAttribute("src", this.getAttribute("url"));
		albumImg.setAttribute("alt", this.getAttribute("alt"));
		albumImg.setAttribute("width", 200);
		albumImg.setAttribute("class", "img-card");

		const body = document.createElement("div");
		body.setAttribute("class", "card-body");
		const title = document.createElement("p");
		title.textContent = `${this.getAttribute("title")}`;
		title.setAttribute("class", "title-album");
		const info = document.createElement("p");
		info.textContent = `${this.getAttribute("info")}`;
		info.setAttribute("class", "info-album");
		const desc = document.createElement("span");
		desc.textContent = `${this.getAttribute("description")}`;
		desc.setAttribute("class", "description");

		body.appendChild(title);
		body.appendChild(info);
		body.appendChild(desc);

		top.appendChild(albumImg);

		card.appendChild(top);
		card.appendChild(body);

		cards.appendChild(card);

		root.appendChild(cards);

		return root;
	}

	styles() {
		const cssRoot = document.createElement("style");
		cssRoot.textContent = `
		.card {
			justify-content: center;
			padding: 2rem;
			border-radius: 10px;
			box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  			margin: 20px;
		  	transition: all 0.3s ease-out;
			border: 0.1px solid #4895ff;
			background: white;
		}

		.card:hover {
			transform: translateY(-5px);
			cursor: pointer;
		  }

		.card .card-body {
			width: 25vh;
		}

		.card .card-body .title-album {
			font-weight: 600;
			text-align: center;
		}

		.card .card-body .info-album {
			font-weight: 300;
			text-align: end;
			color: gray;
		}

		.card .card-body .description {
			text-align: left;
			width: 110%;
		}
		  
		  `;
		return cssRoot;
	}
}

customElements.define("card-album", CardAlbum);
