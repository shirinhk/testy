export default {
    name: "TheVideoComponent",
    props: ["item"],

    template: `
         <section class="video-player">
            <i class="fas fa-film media-icon"></i>
            <h3 class="v-title">{{item.v_a_title}}</h3>
            <video :src='"videoAudio/" + item.media_source' controls></video>
        </section>`
}
