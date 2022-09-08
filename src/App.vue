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
                  class="menu menu-hide shadow shadow-slate-300 sm:w-4/12"
                  id="principal_menu"
                >
                  <div class="mt-4">
                    <a
                      target="_blank"
                      href="https://portafoliofrfweb.000webhostapp.com/cv/cvFranciscoGarciaSpanish.pdf"
                      class="block p-2 border-2 border-white hover:text-black hover:bg-white"
                      >CV SPANISH</a
                    >
                  </div>
                  <div class="mt-2">
                    <a
                      target="_blank"
                      href="https://portafoliofrfweb.000webhostapp.com/cv/cvFranciscoGarciaEnglish.pdf"
                      class="block p-2 border-2 border-white hover:text-black hover:bg-white"
                      >CV ENGLISH</a
                    >
                  </div>
                  <div class="mt-2">
                    <a
                      href="mailto:francisco_glopez@hotmail.com"
                      class="block p-2 border-2 border-white hover:text-black hover:bg-white"
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
            class="flex absolute flex-col left-0 h-screen w-full items-center justify-center"
          >
            <div class="mb-3 text-title">
              <h1
                class="lg:text-5xl text-font-exo text-center sm:text-xl translate"
              >
                HI I'M FRANCISCO, FULL STACK WEB DEVELOPER
              </h1>
              <h2
                class="text-center mt-4 lg:text-3xl text-font-exo sm:text-base translate"
              >
                WELCOME TO MY PORTAFOLIO
              </h2>
            </div>
            <div class="mt-8 text-title text-center w-3/4">
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
            class="flex absolute flex-col left-0 h-screen w-full items-center justify-center"
          >
            <div class="mb-3 text-title">
              <h2
                class="lg:text-5xl text-font-exo text-center sm:text-xl translate"
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
            <div class="mt-8 text-title text-center">
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
            class="flex absolute flex-col left-0 h-screen w-full items-center justify-center"
          >
            <div class="mb-3 text-title">
              <h2
                class="lg:text-5xl text-font-exo text-center sm:text-xl translate w-3/4 mx-auto"
              >
                THE TECHNOLOGIES, FRAMEWORKS AND CMS I CURRENTLY USE ARE THESE
              </h2>
            </div>
            <div class="flex mt-4">
              <img
                src="@/assets/img/html5.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/css3.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/javascript.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/sass.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/wordpress.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/sql.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
            </div>
            <div class="flex mt-4">
              <img
                src="@/assets/img/electronjs.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/bootstrap.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/tailwind.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/jquery.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/webpack.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/mysql.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
            </div>
            <div class="flex mt-4">
              <img
                src="@/assets/img/node.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/express.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/mongodb.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/php.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/vuejs.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
              <img
                src="@/assets/img/strapi.png"
                alt="html5"
                class="w-20 rounded-lg mx-2 item-tech"
              />
            </div>
            <div class="mt-8 text-title text-center">
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
            class="flex absolute flex-col left-0 h-screen w-full items-center justify-center my-projets-list"
          >
            <div class="mb-3">
              <div class="flex mt-2 justify-center">
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

                <TechnologiesProjects
                  :imageUrl="require('@/assets/capture/zle.lc.png')"
                  nameProject="Zle.lc"
                  description="Website of ZSH"
                  technologies="NODEJS, VUEJS, HTML, CSS, JAVASCRIPT, WIZZLE.CSS, WEBPACK"
                  url="https://portafoliofrfweb.000webhostapp.com/downloads/zle.zip"
                  downloadFile="true"
                />
              </div>
              <div class="flex mt-2">
                <TechnologiesProjects
                  :imageUrl="require('@/assets/capture/dr.fo.png')"
                  nameProject="Dr.fo - Shrink Your Link"
                  description="Website of shortener link"
                  technologies="NODEJS, EXPRESS, VUEJS, WIZZLE.CSS MONGODB"
                  url="https://dr.fo/"
                  downloadFile="false"
                />

                <TechnologiesProjects
                  :imageUrl="require('@/assets/capture/americanstrongman.png')"
                  nameProject="American Strong Man"
                  description="Website of GYM and Fitness"
                  technologies="VUEJS, HTML, CSS, JAVASCRIPT, WIZZLE CSS"
                  url="https://portafoliofrfweb.000webhostapp.com/downloads/americanstrongman.zip"
                  downloadFile="true"
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

                <TechnologiesProjects
                  :imageUrl="require('@/assets/capture/cell.com.pl.png')"
                  nameProject="Cell.com.pl"
                  description="Website of sell electronics, mobile and others"
                  technologies="VUEJS, HTML, CSS, JAVASCRIPT, WIZZLE CSS"
                  url="https://portafoliofrfweb.000webhostapp.com/downloads/cell.zip"
                  downloadFile="false"
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
            <div class="mt-3 text-title text-center">
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
            class="flex absolute flex-col left-0 h-screen w-full items-center justify-center my-certificates-list"
          >
            <div class="mb-3 text-title">
              <h2
                class="lg:text-5xl text-font-exo text-center sm:text-xl translate"
              >
                MY LAST COURSES
              </h2>
            </div>
            <div class="flex mt-2">
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
            <div class="flex">
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

            <div class="mt-5 text-title text-center">
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
            class="flex absolute flex-col left-0 h-screen w-full items-center justify-center joke"
          >
            <div class="mb-3">
              <h2
                class="lg:text-5xl text-font-exo text-center sm:text-xl translate"
              >
                JOKE
              </h2>
            </div>
            <div class="w-3/4">
              <p class="text-font-exo text-xl text-center">{{ jokeMessage }}</p>
            </div>
            <div class="mt-4">
              <p class="text-font-exo text-xl translate text-center">
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
                  <a href="https://www.linkedin.com/in/frfweb/" target="_blank">
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
                  <a href="https://github.com/teikblade" target="_blank">
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
export default {
  name: "App",
  components: {
    TechnologiesProjects,
    CertificateComponent,
  },
  data() {
    return {
      jokeMessage: "",
      languageDefault: "en",
    };
  },
  methods: {
    async jokeGenerator() {
      this.jokeMessage = "";
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
      this.jokeMessage = data.value;
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
        this.jokeGenerator();
        return;
      }
      let objTranslate = english();
      this.languageDefault = "en";
      getAllElementForTranslate.forEach((itemText, index) => {
        itemText.innerHTML = objTranslate[index];
      });
      this.jokeGenerator();
    },
    open_panel() {
      console.log("ok");
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

      //let initCount = 0;
      let checkScrollEvent = 0;
      document.addEventListener("wheel", (e) => {
        console.log(e);
        console.log(checkScrollEvent);
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
  },
  mounted() {
    this.detectEvents();
    this.jokeGenerator();
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
  left: -700px;
}
.menu-show {
  left: 0;
}
@media only screen and (max-width: 480px) and (min-width: 300px) {
  .links-mobile {
    grid: none !important;
  }
  .links-mobile > div > .z-10 > .links-fix {
    top: 94vh;
    height: 60px;
  }
  .links-mobile > div > .z-10 > .links-fix > .flex {
    flex-direction: row;
    height: 100%;
  }
  .links-width-fix {
    width: 100% !important;
  }
  .menu-mobile > .w-40 {
    width: 100% !important;
  }
  .menu-mobile > .w-40 > .h-screen > .flex {
    flex-direction: row;
  }
  .menu-mobile > .w-40 > .h-screen > .flex > .mt-6 {
    margin-left: 15px;
    margin-top: 15px;
  }
  .menu-mobile > .w-40 > .h-screen {
    height: 80px;
    bottom: -55px;
  }
  .menu-mobile > .w-40 > .h-screen > .h-screen,
  .menu-mobile > .w-40 > .h-screen > .flex > .h-screen {
    height: 100%;
  }
  .menu-mobile > .w-40 > .h-screen > .flex > .flex {
    flex-direction: row;
    margin-top: 15px;
    justify-content: end;
  }
  .grid-rows-fixed {
    grid-template-rows: repeat(18, minmax(0, 1fr)) !important;
    grid-template-columns: none !important;
  }
  .technologies-fix {
    grid-template-rows: repeat(5, minmax(0, 1fr)) !important;
    grid-template-columns: none !important;
    justify-content: center;
  }
  #content_about .grid-rows {
    grid-template-rows: repeat(1, minmax(0, 1fr)) !important;
    grid-template-columns: none !important;
    height: 75em;
  }
  #content_certificates .grid,
  #content_experience .grid {
    grid-template-rows: repeat(1, minmax(0, 1fr)) !important;
    grid-template-columns: none !important;
  }
}
@media only screen and (max-width: 660px) and (min-width: 481px) {
}
@media only screen and (max-width: 840px) and (min-width: 661px) {
  .links-mobile {
    grid: none !important;
  }
  .links-mobile > div > .z-10 > .links-fix {
    top: 94vh;
    height: 60px;
  }
  .links-mobile > div > .z-10 > .links-fix > .flex {
    flex-direction: row;
    height: 100%;
  }
  .links-width-fix {
    width: 100% !important;
  }
  .menu-mobile > .w-40 {
    width: 100% !important;
  }
  .menu-mobile > .w-40 > .h-screen > .flex {
    flex-direction: row;
  }
  .menu-mobile > .w-40 > .h-screen > .flex > .mt-6 {
    margin-left: 15px;
    margin-top: 15px;
  }
  .menu-mobile > .w-40 > .h-screen {
    height: 80px;
    bottom: -55px;
  }
  .menu-mobile > .w-40 > .h-screen > .h-screen,
  .menu-mobile > .w-40 > .h-screen > .flex > .h-screen {
    height: 100%;
  }
  .h-screen,
  .menu-mobile > .w-40 > .h-screen > .flex > .h-screen {
    justify-content: end;
  }
  .menu-mobile > .w-40 > .h-screen > .flex > .flex {
    flex-direction: row;
    margin-top: 15px;
  }
  .grid-rows-fixed {
    grid-template-rows: repeat(9, minmax(0, 1fr)) !important;
  }
  h1 {
    font-size: 20px !important;
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
}
@media only screen and (min-width: 1920px) {
}
</style>
