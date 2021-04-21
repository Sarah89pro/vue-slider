/**SLIDER **/

const app = new Vue( {
    el: "#app",
    data: {
        photos: [
            "./img/img1.jpg",
            "./img/img2.jpg",
            "./img/img3.jpg",
            "./img/img4.jpg",
        ],

        indexPhoto: 0,
        intervalId: 0,
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
            this.intervalId = setInterval(() => {
                this.nextPhoto();
            }, 4000);
        },

        stopLoop() {
            clearInterval(this.intervalId);
        }

        
    }
})