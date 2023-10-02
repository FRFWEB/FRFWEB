<template>
  <div>
    <header>
      <div class="grid grid-cols-1 gap-4 links-mobile">
        <!-- HEADER -->
        <div class="flex justify-end menu-mobile">
          <div class="z-10 relative w-full">
            <div class="fixed top-0 w-full bg-neutral-800 h-auto">
              <div class="flex h-auto w-full items-center flex-row">
                <div class="p-4">
                  <span class="cursor-pointer" v-on:click="open_panel()"
                    ><i class="fa fa-bars" aria-hidden="true"></i
                  ></span>
                </div>
                <!-- MENU -->
                <div
                  class="menu menu-hide shadow mt-4 shadow-slate-300 sm:w-4/12 md:w-3/12 lg:w-3/12 xl:w-1/5 2xl:w-1/5"
                  id="principal_menu"
                >
                  <div class="">
                    <a
                      target="_blank"
                      href="https://portafoliofrfweb.000webhostapp.com/cv/cvFranciscoGarciaSpanish.pdf"
                      class="block pl-4 py-2 border-b-2 border-white hover:text-black hover:bg-white"
                      >CV SPANISH</a
                    >
                  </div>
                  <div class="">
                    <a
                      target="_blank"
                      href="https://portafoliofrfweb.000webhostapp.com/cv/cvFranciscoGarciaEnglish.pdf"
                      class="block pl-4 py-2 border-b-2 border-white hover:text-black hover:bg-white"
                      >CV ENGLISH</a
                    >
                  </div>
                  <div class="">
                    <a
                      href="mailto:francisco_glopez@hotmail.com"
                      class="block pl-4 py-2 border-b-2 border-white hover:text-black hover:bg-white"
                      >Contact Me</a
                    >
                  </div>
                </div>
                <div
                  class="flex justify-center flex-row items-center w-full h-auto"
                >
                  <button
                    type="button"
                    @click="this.translateContent('es')"
                    class="mx-2 px-4 py-1 border-2 border-white rounded"
                  >
                    Spanish
                  </button>
                  <button
                    type="button"
                    @click="this.translateContent('en')"
                    class="mx-2 px-4 py-1 border-2 border-white rounded"
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="grid grid-cols-1 gap-4">
        <!-- CONTENT-1 -->
        <div class="relative default-transition" id="element_transition">
          <div
            class="flex absolute element-change-responsive flex-col left-0 h-screen w-full items-center justify-center"
          >
            <div class="mb-3 text-title">
              <h1
                class="xl:text-5xl lg:text-4xl text-font-exo text-center sm:text-3xl translate"
              >
                HI I'M FRANCISCO, FULL STACK WEB DEVELOPER
              </h1>
              <h2
                class="text-center mt-4 lg:text-3xl text-font-exo sm:text-xl translate"
              >
                WELCOME TO MY PORTAFOLIO
              </h2>
            </div>
            <div class="mt-8 scroll-event text-center w-3/4">
              <p class="text-font-exo text-xl translate">
                DO YOU WANT TO KNOW MORE ABOUT ME?, SCROLL AND YOU WILL SEE THE
                MAGIC
              </p>
              <i class="fa fa-arrow-down mt-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <!-- CONENT 2 -->
        <div class="relative change-content" id="element_transition">
          <div
            class="flex absolute element-change-responsive flex-col left-0 h-screen w-full items-center justify-center"
          >
            <div class="mb-3 text-title">
              <h2
                class="xl:text-5xl lg:text-4xl text-font-exo text-center sm:text-xl translate"
              >
                ABOUT ME
              </h2>
            </div>
            <div>
              <p
                class="text-justify mt-4 lg:text-2xl text-font-exo sm:text-base translate w-3/4 mx-auto"
              >
                MY PASSION FOR COMPUTERS STARTED AT 12 YEARS OLD, AT 18 IT WAS
                THE FIRST TIME I OBSERVED PROGRAMMING IN THIS CASE IT WAS IN C++
                IN UNIVERSITY WHAT IGNITED MY PASSION, SINCE 2013 I PRACTICE
                PROGRAMMING LOGIC AND TIME LATER I DECIDED TO SPECIALIZE IN WEB
                TECHNOLOGIES, THEREFORE I STARTED LEARNING HTML, CSS, JAVASCRIPT
                AND PHP, CURRENTLY WORKING IN THE AREA SINCE 2016
              </p>
            </div>
            <div class="mt-8 scroll-event text-center">
              <p class="text-font-exo text-xl translate">
                DO YOU WANT TO KNOW WHAT TECHNOLOGIES I CURRENTLY USE?, USE THE
                SCROLL
              </p>
              <i class="fa fa-arrow-down mt-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <!-- CONENT 3 -->
        <div class="relative change-content" id="element_transition">
          <div
            class="flex absolute element-change-responsive flex-col left-0 h-screen w-full items-center justify-center"
          >
            <div class="mb-3 text-title">
              <h2
                class="xl:text-5xl lg:text-4xl text-font-exo text-center sm:text-xl translate w-3/4 mx-auto"
              >
                THE TECHNOLOGIES, FRAMEWORKS AND CMS I CURRENTLY USE ARE THESE
              </h2>
            </div>
            <div class="flex flex-row flex-wrap justify-center mt-4">
              <TechnologiesImages
                :imageUrl="require('@/assets/img/html5.png')"
                altName="html5"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/css3.png')"
                altName="ccs3"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/javascript.png')"
                altName="javascript"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/sass.png')"
                altName="sass"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/wordpress.png')"
                altName="wordpress"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/sql.png')"
                altName="sql"
              />
            </div>
            <div class="flex flex-row flex-wrap justify-center mt-1">
              <TechnologiesImages
                :imageUrl="require('@/assets/img/electronjs.png')"
                altName="electronjs"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/bootstrap.png')"
                altName="bootstrap"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/tailwind.png')"
                altName="tailwind"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/jquery.png')"
                altName="jquery"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/webpack.png')"
                altName="webpack"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/mysql.png')"
                altName="mysql"
              />
            </div>
            <div class="flex flex-row flex-wrap justify-center mt-1">
              <TechnologiesImages
                :imageUrl="require('@/assets/img/node.png')"
                altName="nodejs"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/express.png')"
                altName="expressjs"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/mongodb.png')"
                altName="mongodb"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/php.png')"
                altName="php"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/vuejs.png')"
                altName="vuejs"
              />
              <TechnologiesImages
                :imageUrl="require('@/assets/img/strapi.png')"
                altName="strapi"
              />
            </div>
            <div class="mt-8 scroll-event text-center">
              <p class="text-font-exo text-xl translate">
                WHAT PROJECTS HAVE YOU DONE?, USE THE SCROLL
              </p>
              <i class="fa fa-arrow-down mt-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <!-- CONENT 4 -->
        <div class="relative change-content" id="element_transition">
          <div
            class="flex absolute element-change-responsive flex-col left-0 h-screen w-full items-center justify-center my-projets-list"
          >
            <div class="mb-3">
              <h2
                class="xl:text-5xl translate lg:text-4xl text-font-exo text-center sm:text-xl translate w-3/4 mx-auto"
              >
                MY PROJECTS
              </h2>
              <div class="flex flex-row flex-wrap mt-2 justify-center">
                <TechnologiesProjects
                  :imageUrl="require('@/assets/capture/proyectoshappy.png')"
                  nameProject="Proyectos Happy 3000 C.A"
                  description="Website of servicies"
                  technologies="WORDPRESS"
                  url="https://proyectoshappy.com/"
                  downloadFile="false"
                />

                <TechnologiesProjects
                  :imageUrl="require('@/assets/capture/indpls.in.png')"
                  nameProject="indpls.in"
                  description="Website of indianapolis"
                  technologies="MAPSERVER, OPENLAYERS, STRAPI, EXPRESS, EJS, WIZZLE.CSS, JAVASCRIPT, WEBSCRAPPING"
                  url="https://indpls.in/"
                  downloadFile="false"
                />

                <TechnologiesProjects
                  :imageUrl="require('@/assets/capture/uservices.jpg')"
                  nameProject="Uservicies Corporate INC"
                  description="Website of servicies im USA"
                  technologies=" HTML, CSS, PHP, JAVASCRIPT, JQUERY, BOOTSTRAP"
                  url="https://portafoliofrfweb.000webhostapp.com/downloads/uservicies.zip"
                  downloadFile="true"
                />

                <TechnologiesProjects
                  :imageUrl="require('@/assets/capture/ht.fo.png')"
                  nameProject="ht.fo"
                  description="Website of shortener link"
                  technologies="NODEJS, EXPRESS, VUEJS, WIZZLE.CSS MONGODB"
                  url="https://ht.fo/"
                  downloadFile="false"
                />
              </div>
              <div class="justify-center flex flex-row flex-wrap mt-2">
                <TechnologiesProjects
                  :imageUrl="require('@/assets/capture/zle.lc.png')"
                  nameProject="Zle.lc"
                  description="Website of ZSH"
                  technologies="NODEJS, VUEJS, HTML, CSS, JAVASCRIPT, WIZZLE.CSS, WEBPACK"
                  url="https://portafoliofrfweb.000webhostapp.com/downloads/zle.zip"
                  downloadFile="true"
                />

                <TechnologiesProjects
                  :imageUrl="require('@/assets/capture/dr.fo.png')"
                  nameProject="Dr.fo - Shrink Your Link"
                  description="Website of shortener link"
                  technologies="NODEJS, EXPRESS, VUEJS, WIZZLE.CSS MONGODB"
                  url="https://dr.fo/"
                  downloadFile="false"
                />

                <TechnologiesProjects
                  :imageUrl="require('@/assets/capture/wizzle.png')"
                  nameProject="Wizzle CSS"
                  description="Framework of css"
                  technologies="HTML, CSS, JAVASCRIPT, EXPRESS, EJS, NODEJS, CODEJAR"
                  url="https://wizzle.work/"
                  downloadFile="false"
                />

                <TechnologiesProjects
                  :imageUrl="
                    require('@/assets/capture/serviciostelefonica.png')
                  "
                  nameProject="Servicios Telefonica"
                  description="Website of sell mobiles"
                  technologies="VUEJS, HTML, CSS, JAVASCRIPT, WIZZLE CSS"
                  url="https://serviciostelefonica.com/"
                  downloadFile="false"
                  hiddenElement="true"
                />
              </div>
              <div class="text-center mt-4">
                <a
                  target="_blank"
                  href="https://github.com/teikblade"
                  type="button"
                  class="p-2 border-2 border-white rounded translate hover:bg-white hover:text-gray-700"
                >
                  CHECK MORE PROJECTS IN MY GITHUB
                </a>
              </div>
            </div>
            <div class="mt-3 scroll-event text-center">
              <p class="text-font-exo text-xl translate">
                SCROLL AND YOU WILL SEE MY CURRENTLY TAKEN COURSES
              </p>
              <i class="fa fa-arrow-down mt-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <!-- CONTENT 5 -->
        <div class="relative change-content" id="element_transition">
          <div
            class="flex absolute element-change-responsive flex-col left-0 h-screen w-full items-center justify-center my-certificates-list"
          >
            <div class="mb-3 text-title">
              <h2
                class="lg:text-5xl text-font-exo text-center sm:text-xl translate"
              >
                MY LAST COURSES
              </h2>
            </div>
            <div class="flex flex-row flex-wrap mt-2 justify-center">
              <CertificateComponent
                :certificateImage="require('@/assets/capture/certificate1.jpg')"
                name="certificate1"
              />
              <CertificateComponent
                :certificateImage="require('@/assets/capture/certificate2.jpg')"
                name="certificate2"
              />
              <CertificateComponent
                :certificateImage="require('@/assets/capture/certificate3.jpg')"
                name="certificate3"
              />
              <CertificateComponent
                :certificateImage="require('@/assets/capture/certificate4.jpg')"
                name="certificate4"
              />
            </div>
            <div class="flex flex-row flex-wrap justify-center">
              <CertificateComponent
                :certificateImage="require('@/assets/capture/certificate5.jpg')"
                name="certificate5"
              />
              <CertificateComponent
                :certificateImage="require('@/assets/capture/certificate6.jpg')"
                name="certificate6"
              />
              <CertificateComponent
                :certificateImage="require('@/assets/capture/certificate7.jpg')"
                name="certificate7"
              />
              <CertificateComponent
                :certificateImage="require('@/assets/capture/certificate8.jpg')"
                name="certificate8"
              />
            </div>
            <div class="text-center mt-4">
              <a
                target="_blank"
                href="https://github.com/teikblade"
                type="button"
                class="p-2 border-2 border-white rounded translate hover:bg-white hover:text-gray-700"
              >
                DOWNLOAD ALL CERTIFICATES
              </a>
            </div>

            <div class="mt-5 scroll-event text-center">
              <p class="text-font-exo text-xl translate">
                THIS IS ALL, BUT IF YOU SCROLL YOU WILL HAVE A SURPRISE
              </p>
              <i class="fa fa-arrow-down mt-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <!-- CONTENT-6 -->
        <div class="relative change-content" id="element_transition">
          <div
            class="flex absolute element-change-responsive flex-col left-0 h-screen w-full items-center justify-center joke"
          >
            <div class="mt-4">
              <p
                class="lg:text-5xl text-font-exo sm:text-xl translate text-center"
              >
                HAPPY DAY :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="grid grid-cols-1 gap-4">
        <!-- FOOTER -->
        <div class="">
          <div class="z-10 relative w-full links-width-fix">
            <div
              class="fixed bottom-0 p-2 w-full bg-neutral-800 h-auto links-fix"
            >
              <div
                class="flex h-auto w-full justify-center items-center flex-row"
              >
                <div class="m-3 networks-links">
                  <a href="https://telegram.me/frfweb" target="_blank">
                    <i
                      class="fa fa-telegram hover:text-blue-400"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <div class="m-3 networks-links">
                  <a href="#" target="_blank">
                    <i
                      class="fa fa-linkedin-square hover:text-blue-400"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <div class="m-3 networks-links">
                  <a href="https://www.instagram.com/frf.web/" target="_blank">
                    <i
                      class="fa fa-instagram hover:text-blue-400"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <div class="m-3 networks-links">
                  <a href="https://github.com/frfweb" target="_blank">
                    <i
                      class="fa fa-github-square hover:text-blue-400"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { english, spanish } from "./traslate";
import TechnologiesProjects from "./components/TechnologiesProjects.vue";
import CertificateComponent from "./components/CertificateComponent.vue";
import TechnologiesImages from "./components/TechnologiesImages.vue";
export default {
  name: "App",
  components: {
    TechnologiesProjects,
    CertificateComponent,
    TechnologiesImages,
  },
  data() {
    return {
      jokeMessage: "",
      languageDefault: "en",
    };
  },
  methods: {
    async jokeGenerator() {
      /* this.jokeMessage = "";
      if (this.languageDefault == "es") {
        let response = await fetch(
          "https://palabras-aleatorias-public-api.herokuapp.com/joke/random"
        );
        let data = await response.json();
        data.body.lines.forEach((getLines) => {
          console.log(getLines);
          this.jokeMessage += getLines + " ";
        });
        return;
      }
      let response = await fetch("https://api.chucknorris.io/jokes/random");
      let data = await response.json();
      this.jokeMessage = data.value; */
    },
    translateContent(language) {
      let getAllElementForTranslate = document.querySelectorAll(".translate");
      console.log(getAllElementForTranslate);
      if (language == "es") {
        this.languageDefault = "es";
        let objTranslate = spanish();
        getAllElementForTranslate.forEach((itemText, index) => {
          itemText.innerHTML = objTranslate[index];
        });
        //this.jokeGenerator();
        return;
      }
      let objTranslate = english();
      this.languageDefault = "en";
      getAllElementForTranslate.forEach((itemText, index) => {
        itemText.innerHTML = objTranslate[index];
      });
      //this.jokeGenerator();
    },
    open_panel() {
      let getMenu = document.getElementById("principal_menu");
      if (getMenu.classList.contains("menu-hide") == true) {
        getMenu.classList.add("menu-show");
        getMenu.classList.remove("menu-hide");
        return;
      }
      getMenu.classList.remove("menu-show");
      getMenu.classList.add("menu-hide");
    },
    detectEvents() {
      let getAllContentSection = document.querySelectorAll(
        "#element_transition"
      );

      let checkScrollEvent = 0;
      document.addEventListener("wheel", (e) => {
        pagination([2, 7, 12, 17, 21]);
        function pagination(items) {
          for (let index = 0; index < items.length; index++) {
            const activeScroll = items[index];
            if (checkScrollEvent == activeScroll) {
              if (
                getAllContentSection[index].classList.contains(
                  "default-transition"
                ) == true
              ) {
                //ACTUAL PAGE
                getAllContentSection[index].classList.remove(
                  "default-transition"
                );
                getAllContentSection[index].classList.add("change-content");
                //NEW PAGE
                getAllContentSection[index + 1].classList.add(
                  "default-transition"
                );
                getAllContentSection[index + 1].classList.remove(
                  "change-content"
                );
                return;
              }

              //DESACTIVE PAGE
              getAllContentSection[index].classList.add("default-transition");
              getAllContentSection[index].classList.remove("change-content");
              //ACTIVE PAGE PAGE
              getAllContentSection[index + 1].classList.remove(
                "default-transition"
              );
              getAllContentSection[index + 1].classList.add("change-content");
            }
          }
        }
        if (Math.sign(e.deltaY) == 1) {
          checkScrollEvent++;
        }
        if (Math.sign(e.deltaY) == -1) {
          checkScrollEvent--;
        }
        return false;
      });
    },
    checkResolution() {
      if (
        window.matchMedia("(min-width: 300px)").matches &&
        window.matchMedia("(max-width: 480px)").matches
      ) {
        console.log("Match 300px - 480px");
      } else if (
        window.matchMedia("(min-width: 481px)").matches &&
        window.matchMedia("(max-width: 768px)").matches
      ) {
        console.log("Match 481px - 768px");
      } else if (
        window.matchMedia("(min-width: 769px)").matches &&
        window.matchMedia("(max-width: 992px)").matches
      ) {
        console.log("Match 769px - 992px");
      }
      if (
        window.matchMedia("(min-width: 992px)").matches &&
        window.matchMedia("(max-width: 1024px)").matches
      ) {
        this.detectEvents();
        return;
      }
      if (
        window.matchMedia("(min-width: 1025px)").matches &&
        window.matchMedia("(max-width: 1200px)").matches
      ) {
        this.detectEvents();
        return;
      }
      if (
        window.matchMedia("(min-width: 1201px)").matches &&
        window.matchMedia("(max-width: 1279px)").matches
      ) {
        this.detectEvents();
        return;
      }
      if (
        window.matchMedia("(min-width: 1280px)").matches &&
        window.matchMedia("(max-width: 1919px)").matches
      ) {
        this.detectEvents();
        return;
      }
      if (window.matchMedia("(min-width: 1920px)").matches) {
        this.detectEvents();
        return;
      }
    },
  },
  mounted() {
    this.checkResolution();
    //this.jokeGenerator();
  },
};
</script>

<style>
body {
  background: #1f1f1f;
  color: #fff;
  background-image: url("assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
}
body::before {
  content: "";
  opacity: 0.8;
  background-color: #262626;
  height: 100%;
  width: 100%;
  position: absolute;
}
.fa {
  color: #fff;
  font-size: 35px;
}
.text-font-exo {
  font-family: "Exo", sans-serif;
}
.change-content {
  transition: all 2s ease-in-out;
  top: -1000px;
}
.default-transition {
  transition: all 2s ease-in-out;
  top: 0;
}
.my-projets-list {
  top: -40px;
}
.my-certificates-list,
.joke {
  top: -50px;
}
.menu {
  position: absolute;
  top: 50px;
  width: 20%;
  height: 100vh;
  background: #1f1f1f;
  z-index: 15;
  transition: all ease-in-out 1s;
}
.menu-hide {
  left: -1000px;
}
.menu-show {
  left: 0;
}
.item-tech {
  height: 50px;
}
.my-projets-list h2 {
  visibility: hidden;
}
@media only screen and (max-width: 480px) and (min-width: 300px) {
  .element-change-responsive {
    position: inherit !important;
    height: auto !important;
  }
  body {
    overflow: auto;
  }
  .change-content {
    top: 0;
  }
  main div.grid #element_transition:nth-child(1) {
    top: 135%;
  }
  main div.grid #element_transition:nth-child(2) {
    top: 100%;
  }
  main div.grid #element_transition:nth-child(3) {
    top: 70%;
  }
  main div.grid #element_transition:nth-child(4) {
    top: 30%;
  }
  main div.grid #element_transition:nth-child(5) {
    top: 30%;
  }
  main div.grid #element_transition:nth-child(6) {
    top: 100%;
    margin-top: 200px;
  }

  main div.grid #element_transition:nth-child(6) .joke {
    margin-bottom: 60px;
  }
  .scroll-event {
    visibility: hidden;
  }
  .menu {
    width: 40%;
    top: 65px;
  }
  .my-projets-list h2 {
    visibility: visible;
  }
  .item-tech {
    height: 80px;
  }
}
@media only screen and (max-width: 660px) and (min-width: 481px) {
}
@media only screen and (max-width: 840px) and (min-width: 661px) {
  .element-change-responsive {
    position: inherit !important;
    height: auto !important;
  }
  body {
    overflow: auto;
  }
  .change-content {
    top: 0;
  }
  main div.grid #element_transition:nth-child(1),
  main div.grid #element_transition:nth-child(2),
  main div.grid #element_transition:nth-child(5),
  main div.grid #element_transition:nth-child(6) {
    top: 100%;
  }
  main div.grid #element_transition:nth-child(4) {
    top: 43%;
  }
  main div.grid #element_transition:nth-child(3) {
    top: 85%;
  }
  main div.grid #element_transition:nth-child(5) {
    top: 52%;
  }
  main div.grid #element_transition:nth-child(6) {
    margin-top: 200px;
  }
  main div.grid #element_transition:nth-child(6) .joke {
    margin-bottom: 80px;
  }
  .my-certificates-list {
    top: -200px;
  }
  .scroll-event {
    visibility: hidden;
  }
  .my-projets-list h2 {
    visibility: visible;
  }
  .item-tech {
    height: 80px;
  }
}
@media only screen and (max-width: 992px) and (min-width: 841px) {
}
@media only screen and (max-width: 1024px) and (min-width: 992px) {
  .my-projets-list {
    top: -70px;
  }
}
@media only screen and (max-width: 1200px) and (min-width: 1025px) {
}
@media only screen and (max-width: 1279px) and (min-width: 1201px) {
}
@media only screen and (max-width: 1919px) and (min-width: 1280px) {
  .my-projets-list {
    top: -100px;
  }
  .my-certificates-list {
    top: -70px;
  }
  .item-tech {
    height: 80px;
  }
}
@media only screen and (min-width: 1920px) {
  .change-content {
    top: -1500px;
  }
  .item-tech {
    height: 80px;
  }
}
</style>
