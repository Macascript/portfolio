
// Vue.component("Work",{
//     props: ["name","image","link"],
//     methods: {
//         openModal: function(id){
//             $("#"+this.name).modal("show");
//         }
//     },
//     template: `
//         <div>
//             <img role="button" @click="openModal" width="300px" :src="image" :alt="name" />
//             <div class="portfolio-modal modal fade" :id="name" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
//                 <div class="modal-dialog modal-xl">
//                     <div class="modal-content">
//                         <div class="modal-header border-0">
//                             <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body text-center pb-5">
//                             <div class="container">
//                                 <div class="row justify-content-center">
//                                     <div class="col-lg-8">
//                                         <!-- Portfolio Modal - Title-->
//                                         <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">{{ name }}</h2>
//                                         <!-- Icon Divider-->
//                                         <div class="divider-custom">
//                                             <div class="divider-custom-line"></div>
//                                             <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
//                                             <div class="divider-custom-line"></div>
//                                         </div>
//                                         <!-- Portfolio Modal - Image-->
//                                         <img class="img-fluid rounded mb-5" :src="image" alt="..." />
//                                         <!-- Portfolio Modal - Text-->
//                                         <p class="mb-4"><slot /></p>
//                                         <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
//                                             <i class="fas fa-times fa-fw"></i>
//                                             Close Window
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
// })

Vue.component("Work",{
    props: ["name","image","link"],
    methods: {
        openModal: function(){
            this.$emit("open-modal",this.$vnode.key);
        }
    },
    template: `
        <div>
            <b-button v-b-modal.modal-1 @click=openModal><img role="button" width="300px" :src="image" :alt="name" /></b-button>
        </div>
    `
})

new Vue({
    el: "#app",
    data: {
        language: "english",
        actualWork: 0,
        portfolio: [
            {
                name: "Erit",
                image: "static/assets/img/portfolio/erit.jpg",
                link: "https://tengounproblema.itch.io/erit-demo",
                englishDescription: `<div>
                    <p>Space themed exploration and platformer game in which an alien girl 
                    crashes into an unknown planet and must find the missing components of her ship in order to 
                    leave the planet and continue her journey.</p>
                    <ul>
                        <li>Side scrolling with interconnected map.</li>
                        <li>Fast and challenging gameplay.</li>
                        <li>2.5D cartoon visual style with frame by frame animation.</li>
                        <li>Unlock new abilities in classic Metroidvania style.</li>
                    </ul>
                    <p>In this demo you will explore an alien cave full of wonders, 
                    face natural dangers and learn new skills that will open new paths.</p>
                    <p>This is only a demo feautring the first zone of the game, 
                    that we will expand over time with new biomes and abilities</p>
                </div>`,
                spanishDescription: `<div>
                    <p>Juego de exploración  y de plataformas en el que una chica alienígena 
                    se estrella en un planeta desconocido y debe encontrar los componentes que 
                    faltan en su nave para poder salir del planeta y continuar su viaje.</p>
                    <ul>
                        <li>Exploración en scroll lateral con mapa interconectado.</li>
                        <li>Juego rápido y retante.</li>
                        <li>Estilo visual cartoon 2.5D con animación frame a frame.</li>
                        <li>Desbloquea nuevas habilidades para llegar a nuevas zonas  al estilo metroidvania.</li>
                    </ul>
                    <p>En esta demo explorarás una cueva alienígena llena de maravillas, 
                    te enfrentarás a peligros naturales y aprenderás  habilidades que 
                    te abrirán nuevos caminos.</p>
                    <p>Esta es sólo una demo que muestra la primera zona del juego, 
                    que se ampliará con el tiempo con nuevos biomas y habilidades.</p>
                </div>`
            }
        ],
        spanishAbout: ["",""],
        englishAbout: ["",""]
    },
    methods: {
        changeLanguage: function(language){
            this.language = language;
        },
        openModal: function(work){
            this.actualWork = work;
        }
    }
});