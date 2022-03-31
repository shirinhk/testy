export default {
    name: "TheAudioComponent",

    template: `
        <section class="audio-player">
            <i class="fas fa-music media-icon"></i><h4>This is the audio component</h4>
            <audio class="audio-player" controls></audio>
            <article>
                <h3>{{piece.v_a_title}}</h3>
                <p>Controls and whatnot... or maybe info about our audio track</p>
            </article>
        </section>
    `
}