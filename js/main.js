import { getData } from "./components/TheDataMiner.js";
import TheThumbNail from "./components/TheThumbNail.js";
import LightboxComponent from "./components/TheLightboxComponent.js";
import { SendMail } from "./components/mailer.js";

(() => {

    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".mobile-nav");

    // hamburger menu

    menu_btn.addEventListener("click", function () {
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
    })



    const myVue = new Vue({
        created: function() {
            // go fetch the portfolio data here
            // make it available in the vue instance
            getData(null, (data) => this.portfolioData = data )
        },

        // next: function() {
        //     if (this.step === 1&& this.$v.name.$invalid) {
        //     return false;
        //     }
        //     this.step++;
        // },
        

        data: {
            // this is storing the database info from our fetch call
            portfolioData: [],
            message: "hello from Vue",
            isVisible: false,
            currentPortfolioItem: {},
            
            step:1,
            
            name:'',
            email:'',
            subject:'',
            message: '',
            errors:[],
            
        },

        methods: {
            popLightBox(item){
                //debugger;
                this.currentPortfolioItem = item;
                
                // turn the lightbox on
                this.isVisible = true;  
            },

            closeLightBox() {
                //debugger;
                this.isVisible = false;
            },

            prev() {
                this.step--;
              },

            next() {
                
                this.step++;
              },
       

              submit(){
                // form validation
                this.errors = [];
                if (!this.name) {
                this.errors.push('Name is required');
                }
                if (!this.email) {
                this.errors.push('Email is required');
                }
                if (!this.subject) {
                this.errors.push('Subject is required');
                }

                else {
                    this.step++;  
                }
                
            }
        },

        components: {
            thumb: TheThumbNail,
            lightbox: LightboxComponent
        }
    }).$mount("#app");    



// Contact form Send mail
    // let mailSubmit = document.querySelector('.sending-form');

    // function processMailFailure(result) {
    //     console.table(result); 
    //     alert(result.message);
    // }

    // function processMailSuccess(result) {
    //     console.table(result);
    //     alert(result.message);
    // }

    // function processMail(event) {
    //     event.preventDefault();

    //     SendMail(this.parentNode)
    //         .then(data => processMailSuccess(data))
    //         .catch(err => processMailFailure(err));
    // }

    // mailSubmit.addEventListener("click", processMail);



})()

