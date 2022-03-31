export default {
    name: "TheThumbnailComponent",

    props: ["piece"],


    template: `
        <div @click="showmydata" class="portfolio-items">
            <h4 class="p_name">{{ piece.name }} </h4>
            <p class="p-description"> {{ piece.description}} </p>
            <div class="p-items">
                <img :src='"images/" +piece.biopic' :alt="piece.name" class="thumb-img">
            </div>  
        </div>
    `
    ,

    
    methods: {
        showmydata() {
            //debugger;
            this.$emit("showdata", this.piece);
        }
    }
}