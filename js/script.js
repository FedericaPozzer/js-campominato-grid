// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// Richiamo il bottone già presente nell'HTML
// Addeventlistener con il click sul bottone
    // Genero griglia con una funzione
        // FUNZIONE GRIGLIA
    // BOH


// richiamo il bottone 
let my_button = document.getElementById("start-button");
// addeventlistener con il click sul bottone
my_button.addEventListener(
    "click", 
    function () {
        // genero la griglia.. come? BOH, intanto vedi se va:
        // console.log("cliccato");
        // prendo la griglia dall'HTML
        const grid_el = document.getElementById("grid");
        // collego la funzione griglia con la girglia pescata dall'HTML
        generate_grid(grid_el);


        /********************************
         *          FUNZIONI            *
         *******************************/


        // funzione per creare la griglia con dentro le celle numerate
        function generate_grid(grid) {


            // le celle devono essere numerate, quindi:
                // dichiaro array lista numeri (vuota)
            let lista_numeri = [];
                // condizioni per generare i numeri
            for (let i = 0; i < 100; i++) {
                    // pusho i numeri generati nell'array
                lista_numeri.push(i + 1);
            }
            // funziona? NOPE -- perchè? AAAAH ok, perchè siamo dentro a un click iniziale -.-" ok, funziona!
            console.log(lista_numeri);

            // now, ogni volta che genro una cella la devo numerare :)
            // COME? BOH!

            

            for (let i = 0; i < 100; i++) {
                // creo le celle
                const cell_el = document.createElement("div");
                cell_el.classList.add("square");
                grid.append(cell_el);

                // "quando clicco sulla cella, cambia colore"
                cell_el.addEventListener("click",
                    function () {
                        this.classList.toggle("clicked");
                    }
                )
            }
        };
    }
)