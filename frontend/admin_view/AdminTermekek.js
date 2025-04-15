import AdminTermek from "./AdminTermek.js";

export default class AdminTermekek {
  #lista;
  #szuloElem;
  constructor(lista, szuloelem) {
    console.log(lista)
    this.#lista = lista;
    this.#szuloElem = szuloelem;
    this.megjelenit();
  }
  megjelenit() {
    let html=`<table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cím</th>
                        <th scope="col">Szerző</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                </table>`
    this.#szuloElem.insertAdjacentHTML("beforeend",html)
   
    this.#lista.forEach((element, index) => {
      new AdminTermek(element,index, this.#szuloElem.querySelector("table tbody"));
    });
  }
}
