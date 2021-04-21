/**SLIDER **/

const app = new Vue( {
    el: "#app",              //collegamento div #app
    data: {
        photos: [            //Array di foto
            "./img/img1.jpg", //0
            "./img/img2.jpg", //1
            "./img/img3.jpg", //2
            "./img/img4.jpg", //3
        ],

        indexPhoto: 0,        //posizione di partenza dell'indice (attuale) su img all'inizio volgiamo mostrare la 0
        intervalId: 0,        //proprietà a disposizione per Interval
    },
    //carico la pagina, il mio componente è pronto e non voglio aspettare l'interazione dell'utente
    created() { //si scatena da sola. Qui si piazza ciò che la nostra app deve fare subito da sola
        this.startLoop(); //chiamiamo l'inizializzazione del setInterval
    },

    methods: {
        prevPhoto() {
            this.indexPhoto -= 1; //invece che aumentare qui bisogna diminuire

            if (this.indexPhoto < 0) {              
                this.indexPhoto = this.photos.length -1;
            }


        },
        //Prima funzione: on click si scatena questo evento
        nextPhoto() {
            this.indexPhoto += 1;  //incremento il conteggio di uno

            if (this.indexPhoto > (this.photos.length -1)) {  //se l'indice attuale è mavggiore della length dell'array (-1 per recuperare il valore)
                this.indexPhoto = 0;                          //riporta l'indice allo stato iniziale
            }
        },

        setPhoto(index) {  //valore per settare l'indice attivo, assegnamo il valore che prendiamo dalla funzione
            console.log(index);
            this.indexPhoto = index;
        },
        
        startLoop()  {
            this.intervalId = setInterval(() => { //per iniziare il loop: passare alla prossima slide
                this.nextPhoto();                 //per UI il loop va pure fermato, ma per via dello scope non posso settare qui la variabile che mi serve
            }, 4000);
        },

        stopLoop() {                       //ferma il loop (qui in lettura)
            clearInterval(this.intervalId);
        }    
    }
});