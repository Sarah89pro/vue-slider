/**SLIDER **/

const app = new Vue( {
    el: "#app",
    data: {
        photos: [
            "./img/Arroburghini.jpg",
            "./img/FishBurger.jpg",
            "./img/Club Sandwich.jpg",
            "./img/Burger con salsa di mirtilli rossa.jpg",
        ],

        indexPhoto: 0,
        IntervalID: 0,
    },

    created() {
        this.startLoop();
    },

    methods: {
        prevPhoto() {
            this.indexPhoto -= 1;

            if (this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length -1;
            }


        },

        nextPhoto() {
            this.indexPhoto += 1;

            if (this.indexPhoto > (this.photos.length -1)) {
                this.indexPhoto = 0;
            }
        },

        setPhoto(index) {
            console.log(index);
            this.indexPhoto = index;
        },

        startLoop()  {
            setInterval(() => {
                this.nextPhoto();
            }, 4000);
        },

        stopLoop() {
            clearInterval(this.IntervalID);
        }

        
    }
})