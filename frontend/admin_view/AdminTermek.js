export default class AdminTermek {
  #obj;
  #index;
  #szuloElem;
  #torolGOMB;
  #szerkesztGOMB;
  constructor(obj, index, szuloelem) {
    this.#obj = obj;
    this.#index = index;
    this.#szuloElem = szuloelem;

    this.megjelenit();
    this.esemenyKezeloTorol();
  }
  megjelenit() {
    let html = `<tr>`;

    for (const key in this.#obj) {
      if (key === "image") {
        html += `<td scope="col"><img src="${this.#obj[key]}" alt="${
          this.#obj.title
        }" width="100"></td>`;
      } else {
        html += `<td scope="col">${this.#obj[key]}</td>`;
      }
    }

    // Végén gombos oszlop
    html += `<td scope="col">
            <button class="szerkeszt">✏</button>
            <button class="torol">🗑</button>
         </td>`;
    html += `</tr>`;

    this.#szuloElem.insertAdjacentHTML("beforeEnd", html);
    this.#torolGOMB = this.#szuloElem.querySelector(
      "tr:last-child td:last-child button:nth-child(2)"
    );
    this.#szerkesztGOMB = this.#szuloElem.querySelector(
      "tr:last-child td:last-child button:nth-child(1)"
    );
  }
  esemenyKezeloTorol() {
    this.#torolGOMB.addEventListener("click", () => {
      window.dispatchEvent(
        new CustomEvent("torol", {
          detail: { id: this.#obj.id, index: this.#index },
        })
      );
    });
  }
}
