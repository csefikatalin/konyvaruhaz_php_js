export default class Urlap {
  #szuloElem;
  constructor(szuloElem) {
    this.#szuloElem = szuloElem;
    this.megjelenit();
    this.submitGOMB=document.getElementById("submit")
    this.esemenykezelo()
  }
  esemenykezelo(){
    this.submitGOMB.addEventListener("click",(e)=>{
        e.preventDefault(); // ne töltse újra az oldalt

        const konyv = {
            title: document.getElementById("title").value.trim(),         
            author: document.getElementById("author").value.trim(),           
        };
       console.log(konyv)
        window.dispatchEvent(new CustomEvent("ujtermek",{detail:konyv}))
    })
  }
  megjelenit() {
    let html = `<form style="max-width:800px;  padding: 50px">
                    <div class="mb-3">
                        <label for="title" class="form-label">A könyv címe</label>
                        <input type="text" class="form-control" id="title" aria-describedby="titleHelp" required pattern="[A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű0-9 ]{2,}">
                        <div id="titleHelp" class="form-text">A cím  legalább két karakter kell legyen!</div>
                    </div>
                    <div class="mb-3">
                        <label for="author" class="form-label">A könyv szerzője</label>
                        <input type="text" class="form-control" id="author" aria-describedby="authorHelp" required pattern="^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+ [A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+$">
                        <div id="titleHelp" class="form-text">A szerzőt nagybetűvel kell írni!</div>
                    </div>
                  
                   
                   
                    <button type="submit" id="submit" class="btn btn-primary">Rögzít</button>
                    </form>`;
                    this.#szuloElem.insertAdjacentHTML("beforeend",html)
  }
}
