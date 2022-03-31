import TheAudioComponent from "./TheAudioComponent.js";
import TheVideoComponent from "./TheVideoComponent.js";


export default {
    name: "TheLightboxComponent",

    props: ["piece"],

    computed: {
        activeComponent: function() {
            return `${this.piece.mediaType + "Component"}`;
        }
    },

    data: function() {
        return {
            slideIndex: 1,
        }        
    },

    mounted() {
        this.showSlides(this.slideIndex);
    },


    template:`
    <section class="lightboxWrapper">

    <div class="close">
            <i @click="closeMe" class="fa-solid fa-circle-xmark"></i>
    </div>

   
    <div class="slideshow-container">
        <div class="slides fade" id="slide-flex">
            <div id="slide-flex">
                <div>
                    <video v-if="piece.mediaType=='Video'" :src='"video/" + piece.pic_1' autoplay muted controls class="video"></video>
                    <img v-else :src='"images/" +piece.pic_1' :alt="piece.name" class="slide-pic">
                </div>
                <div class="title">
                    <h2 class="slide-title">{{ piece.title_1}}</h2>
                    <p class="p-info"> {{ piece.info_1}} </p>
                </div>
            </div>
        </div>

        <div class="slides fade" id="slide-flex">
            <div id="slide-flex">
                <div>
                    <video v-if="piece.mediaType=='Video'" :src='"video/" + piece.pic_2' autoplay muted controls class="video"></video>
                    <img v-else :src='"images/" + piece.pic_2' :alt="piece.name" class="slide-pic">
                </div>
                <div class="title">
                    <h2 class="slide-title">{{ piece.title_2}}</h2>
                    <p class="p-info"> {{ piece.info_2}} </p>
                </div>
            </div>
        </div>

        <div class="slides fade" id="slide-flex">
            <div id="slide-flex">
                <div>
                    <video v-if="piece.mediaType=='Video'" :src='"video/" + piece.pic_3' autoplay muted controls class="video"></video>
                    <img v-else :src='"images/" + piece.pic_3' :alt="piece.name" class="slide-pic">
                </div>
                <div class="title">
                    <h2 class="slide-title">{{ piece.title_3}}</h2>
                    <p class="p-info"> {{ piece.info_3}} </p>
                </div>
            </div>
        </div>

        <a class="left" @click="plusSlides(-1)">&#10094;</a>
        <a class="right" @click="plusSlides(1)">&#10095;</a>
    </div>

   
    </section>
    `,


    methods: {
        closeMe() {
            //document.querySelector(".lightbox").classList.remove('visible');
            this.$emit("closelb");
        },


        plusSlides(n) {
            this.showSlides(this.slideIndex += n);
        },
        
        currentSlide(n) {
            this.showSlides(this.slideIndex = n);
        },

        showSlides(n) {
            let i,
                slides = document.querySelectorAll(".slides");

            if (n > slides.length) {this.slideIndex = 1}
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[this.slideIndex-1].style.display = "block";
        }
    },

    components: {
        AudioComponent: TheAudioComponent,
        VideoComponent: TheVideoComponent
    }
}
