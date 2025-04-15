export default class Modell{
    #lista=[]
    constructor(lista){
        this.#lista=lista
    }
     getAdat(vegpont,callback) {
      console.log(vegpont)
        fetch(vegpont)
          .then((response) => response.json())
          .then((data) => {
            //AdminTermekekMegjelenit(data);
            this.#lista=data
            console.log(this.#lista)
            callback(this.#lista)
          });
      }
      
       postAdat(vegpont, product,callback) {
        fetch(vegpont, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.#lista.push(data);
            //AdminTermekekMegjelenit( this.#lista)
            callback(this.#lista)
          });
      }
      
       deleteAdat(vegpont,id,index,callback) {
        fetch(`${vegpont}/${id}`, {
          method: "DELETE",
          body: JSON.stringify({ id: id })
        })
          .then((response) => response.json())
          .then((data) => {console.log(data)
            this.#lista.splice(index, 1);
            callback(this.#lista)
          });
      }
      
}