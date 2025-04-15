import AdminTermekek from "./admin_view/AdminTermekek.js";
import Urlap from "./admin_view/Urlap.js";
import Modell from "./Modell.js";

const ADMINGOMB = document.getElementById("admin");
const TERMEKEKGOMB = document.getElementById("publicTermek");
const KOSARGOMB = document.getElementById("publicKosar");
const TAROLO = document.getElementById("tarolo");
const vegpont="http://localhost:8000/books_endpoints.php"
const LISTA = [];
let modell=new Modell(LISTA)
TAROLO.innerHTML = `<article class="col-lg-12">
                        <div class="urlap">
                        </div>
                        <div class="termekek">
                        ADMIN
                        </div>
                    </article>`;

new Urlap(TAROLO.querySelector("article .urlap"));
modell.getAdat(vegpont,adminTermekekMegjelenit);

ADMINGOMB.addEventListener("click", () => {
  TAROLO.innerHTML = `<article class="col-lg-12">
                            <div class="urlap">
                            </div>
                            <div class="termekek">
                            ADMIN
                            </div>
                          </article>`;

  new Urlap(TAROLO.querySelector("article .urlap"));
  modell.getAdat(vegpont, adminTermekekMegjelenit);
});
TERMEKEKGOMB.addEventListener("click", () => {
  TAROLO.innerHTML = `<article class="col-lg-9"> TERMÉKEK</article>
                        <aside class="col-lg-3"> kosár</aside>`;
});

KOSARGOMB.addEventListener("click", () => {
  TAROLO.innerHTML = `<article class="col-lg-12"> KOSARAM</article>`;
});

window.addEventListener("torol", (e) => {
  modell.deleteAdat(vegpont,e.detail.id,e.detail.index,adminTermekekMegjelenit);  
});
window.addEventListener("ujtermek", (e) => {
  console.log(e.detail)
    modell.postAdat(vegpont,e.detail,adminTermekekMegjelenit); 
  });

function adminTermekekMegjelenit(lista) {
  console.log(lista)
  console.log(LISTA)
  TAROLO.querySelector("article .termekek").innerHTML = "";
  new AdminTermekek(lista, TAROLO.querySelector("article .termekek"));
}
