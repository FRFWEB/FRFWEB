<template>
  <div>
    <div class="grid grid-cols-3 gap-4 links-mobile">
      <!-- COL-1 -->
      <div class="">
        <div class="z-10 relative w-40 links-width-fix">
          <div class="absolute w-full bg-neutral-800 h-screen links-fix">
            <div
              class="flex h-screen w-full justify-center items-center flex-col"
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
      <!-- COL-2 -->
      <div class="">
        <div
          class="flex absolute flex-col left-0 h-screen w-full items-center justify-center"
        >
          <div class="mb-3 text-title">
            <h1 class="lg:text-5xl text-font-exo text-center sm:text-xl">
              I'M FRANCISCO, WELCOME TO MY PORTAFOLIO
            </h1>
            <p class="text-center lg:text-2xl text-font-exo mt-2 sm:text-base">
              PLEASE SELECT CATEGORY
            </p>
          </div>
          <div class="flex item-category">
            <div class="m-2">
              <span class="cursor-pointer" v-on:click="open_panel('dev')"
                ><h2 class="text-lg hover:text-blue-400">
                  WEB DEVELOPER
                </h2></span
              >
            </div>
            <div class="m-2">
              <span class="cursor-pointer" v-on:click="open_panel('editor')"
                ><h2 class="text-lg hover:text-blue-400">VIDEO EDITOR</h2></span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- COL-3 -->
      <div class="flex justify-end menu-mobile">
        <div class="z-10 relative w-40">
          <div class="absolute w-full bg-neutral-800 h-screen">
            <div class="flex h-screen w-full items-center flex-col">
              <div class="mt-6">
                <span class="cursor-pointer" v-on:click="open_panel('menu')"
                  ><i class="fa fa-bars" aria-hidden="true"></i
                ></span>
              </div>
              <div
                class="flex justify-center flex-col items-center w-full h-screen"
              >
                <div class="m-3 text-center">
                  <a
                    href="https://portafoliofrfweb.000webhostapp.com/cv/cvFranciscoGarciaSpanish.pdf"
                    target="_blank"
                    ><i class="fa fa-file-pdf-o" aria-hidden="true"></i
                  ></a>
                  <p>spanish</p>
                </div>
                <div class="m-3 text-center">
                  <a
                    href="https://portafoliofrfweb.000webhostapp.com/cv/cvFranciscoGarciaEnglish.pdf"
                    target="_blank"
                    ><i class="fa fa-file-pdf-o" aria-hidden="true"></i
                  ></a>
                  <p>english</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL MENU -->
      <div
        class="flex absolute w-full h-screen justify-center items-center bg-neutral-800 item-hide"
        id="modal_menu"
      >
        <div
          class="w-11/12 h-5/6 border-slate-100 border rounded-sm p-10 overflow-y-scroll"
        >
          <div class="text-right">
            <span class="cursor-pointer" v-on:click="open_panel('menu')"
              ><i class="fa fa-times" aria-hidden="true"></i
            ></span>
          </div>
          <div>
            <h3 class="text-center text-3xl text-font-exo">MENU</h3>
          </div>
          <div class="mt-2">
            <div class="grid grid-rows grid-cols-3 justify-center gap-4">
              <div class="text-center">
                <p
                  v-on:click="open_item_menu('about')"
                  class="cursor-pointer border-white border-solid border-2 hover:bg-white hover:text-black"
                >
                  About
                </p>
              </div>
              <div class="text-center">
                <p
                  v-on:click="open_item_menu('certificates')"
                  class="cursor-pointer border-white border-solid border-2 hover:bg-white hover:text-black"
                >
                  Certificates
                </p>
              </div>
              <div class="text-center">
                <p
                  v-on:click="open_item_menu('experience')"
                  class="cursor-pointer border-white border-solid border-2 hover:bg-white hover:text-black"
                >
                  Experience
                </p>
              </div>
            </div>
            <div class="mt-5 item-hide hidden" id="content_about">
              <div
                class="lg:grid lg:grid-rows-1 lg:grid-cols-2 gap-4 sm:grid-rows-2 sm:grid-cols-1"
              >
                <div>
                  <p class="text-justify text-base">
                    Buenas, soy especializado en el Desarrollo web con más de 3
                    años de experiencia bajo contrato de empresas y freelancer,
                    las tecnologías que actualmente manejo son html, css, sass,
                    bootstrap, tailwindcss, javascript, jquery, php, nodejs
                    vuejs, express.js, webpack, sql entre otros... Así mismo
                    evaluó las tecnologías correspondientes a usar de acuerdo a
                    los requerimientos solicitados, también totalmente abierto
                    al aprendizaje continuo de nuevas tecnologías, siempre
                    motivado en obtener los mejores resultados al igual ser
                    productivo para el equipo, realizo monitoreo y optimización
                    constante del código ya realizado.
                  </p>
                  <p class="mt-2 text-justify text-base">
                    Mi experiencia consiste la construcción de sitio web ya
                    previamente diseñados o no diseñados utilizando las
                    tecnologías previamente discutidas cumpliendo requisitos
                    tales como responsive desing, comprensión de código, SEO,
                    evaluación de velocidad con LightSpeed o LightHouse, uso de
                    Api’s para mostrar información determinada, conexiones de
                    base datos, CRUD, compresión de imágenes, montar servidor
                    local con nodejs, xampp o wampserver, reparación u
                    optimización de código en producción entre otros... Por otro
                    lado, en cuanto a servidores ha sido renovación de
                    certificado ssl, configuración de apache2 o httpd en
                    servidores CentOs o Ubuntu, configuración de httpd.conf
                    agregando puertos virtuales y generar código bash para
                    navegación más rápida en el terminal Por último, manejo
                    herramientas como photoshop, figma, movavi, postman, putty,
                    winscp y código bash
                  </p>
                </div>
                <div>
                  <img
                    src="@/assets/img/about.jpg"
                    alt="about"
                    class="w-full"
                  />
                </div>
              </div>
            </div>
            <div class="mt-5 item-hide hidden" id="content_certificates">
              <div class="grid grid-rows-3 grid-cols-3 gap-4">
                <CertificateComponent
                  :certificateImage="
                    require('@/assets/capture/certificate1.jpg')
                  "
                  name="certificate1"
                />
                <CertificateComponent
                  :certificateImage="
                    require('@/assets/capture/certificate2.jpg')
                  "
                  name="certificate2"
                />
                <CertificateComponent
                  :certificateImage="
                    require('@/assets/capture/certificate3.jpg')
                  "
                  name="certificate3"
                />
                <CertificateComponent
                  :certificateImage="
                    require('@/assets/capture/certificate4.jpg')
                  "
                  name="certificate4"
                />
                <CertificateComponent
                  :certificateImage="
                    require('@/assets/capture/certificate5.jpg')
                  "
                  name="certificate5"
                />
                <CertificateComponent
                  :certificateImage="
                    require('@/assets/capture/certificate6.jpg')
                  "
                  name="certificate6"
                />
                <CertificateComponent
                  :certificateImage="
                    require('@/assets/capture/certificate7.jpg')
                  "
                  name="certificate7"
                />
                <CertificateComponent
                  :certificateImage="
                    require('@/assets/capture/certificate8.jpg')
                  "
                  name="certificate8"
                />
              </div>
            </div>
            <div class="mt-5 item-hide hidden" id="content_experience">
              <div class="grid grid-rows grid-cols-2 gap-4">
                <ExperiencesComponent nameExperience="FREELANCE DEVELOPER" />
                <ExperiencesComponent nameExperience="FRONT-END DEVELOPER" />
                <ExperiencesComponent nameExperience="ANALYST PROGRAMMER" />
                <ExperiencesComponent nameExperience="SOTFWARE ENGINEER" />
                <ExperiencesComponent nameExperience="TECHNICAL SUPPORT" />
                <ExperiencesComponent nameExperience="WEB CONSULTANT" />
                <ExperiencesComponent
                  nameExperience="FULL STACK WEB DEVEOLPER"
                />
                <ExperiencesComponent nameExperience="LEAD DEVEOLPER" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL WEB DEVEOLPER -->
      <div
        class="flex absolute w-full h-screen justify-center items-center bg-neutral-800 item-hide"
        id="modal_dev"
      >
        <div
          class="w-11/12 h-5/6 border-slate-100 border rounded-sm p-10 overflow-y-scroll"
        >
          <div class="text-right">
            <span class="cursor-pointer" v-on:click="open_panel('dev')"
              ><i class="fa fa-times" aria-hidden="true"></i
            ></span>
          </div>
          <div class="m-2">
            <h3 class="text-center text-3xl text-font-exo">Technologies</h3>
          </div>
          <div
            class="grid lg:grid-rows-1 lg:grid-flow-col justify-center gap-4 md:grid-rows-2 md:grid-cols-10 technologies-fix"
          >
            <TechnologiesImages
              :imageUrl="require('@/assets/img/html5.png')"
              altName="frf html5"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/css3.png')"
              altName="frf css3"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/javascript.png')"
              altName="frf javascript"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/sass.png')"
              altName="frf sass"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/bootstrap.png')"
              altName="frf botstrap"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/wordpress.png')"
              altName="frf wordpress"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/node.png')"
              altName="frf node"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/vuejs.png')"
              altName="frf vuejs"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/express.png')"
              altName="frf express"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/php.png')"
              altName="frf php"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/cpanel.png')"
              altName="frf cpanel"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/sql.png')"
              altName="frf sql"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/jquery.png')"
              altName="frf jquery"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/gulp.png')"
              altName="frf gulp"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/photoshop.png')"
              altName="frf gulp"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/figma.png')"
              altName="frf figma"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/api.png')"
              altName="frf api"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/tailwind.png')"
              altName="frf api"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/seo.png')"
              altName="frf seo"
            />
            <TechnologiesImages
              :imageUrl="require('@/assets/img/mongodb.png')"
              altName="frf seo"
            />
          </div>
          <div class="mt-2">
            <p class="text-center text-lg text-font-exo">Projects</p>
          </div>
          <div class="mt-2">
            <div
              class="grid grid-rows-6 grid-cols-3 grid-flow-col gap-4 grid-rows-fixed sm:grid-cols-2"
            >
              <TechnologiesProjects
                :imageUrl="require('@/assets/capture/dateadventista.jpg')"
                nameProject="Date Adventista"
                description="Website sites online"
                technologies="HTML, CSS, PHP, JAVASCRIPT, BOOTSTRAP"
                url="https://portafoliofrfweb.000webhostapp.com/downloads/dateadventista.zip"
                downloadFile="true"
              />

              <TechnologiesProjects
                :imageUrl="require('@/assets/capture/eurotopes.jpg')"
                nameProject="Eurotopes Marmoles y Granitos"
                description="Website of marmoles and granito"
                technologies="HTML, CSS, PHP, BOOTSTRAP"
                url="https://portafoliofrfweb.000webhostapp.com/downloads/euro.zip"
                downloadFile="true"
              />

              <TechnologiesProjects
                :imageUrl="require('@/assets/capture/uservices.jpg')"
                nameProject="Uservicies Corporate INC"
                description="Website of servicies im USA"
                technologies=" HTML, CSS, PHP, JAVASCRIPT, JQUERY, BOOTSTRAP"
                url="https://portafoliofrfweb.000webhostapp.com/downloads/uservicies.zip"
                downloadFile="false"
              />

              <TechnologiesProjects
                :imageUrl="require('@/assets/capture/veneremesa.jpg')"
                nameProject="Veneremesa"
                description="Website of remeses"
                technologies="HTML, CSS, PHP, BOOTSTRAP"
                url="https://portafoliofrfweb.000webhostapp.com/downloads/veneremesa.zip"
                downloadFile="true"
              />

              <TechnologiesProjects
                :imageUrl="require('@/assets/capture/zle.lc.png')"
                nameProject="Zle.lc"
                description="Website of ZSH"
                technologies="NODEJS, VUEJS, HTML, CSS, JAVASCRIPT, WIZZLE.CSS, WEBPACK"
                url="https://portafoliofrfweb.000webhostapp.com/downloads/zle.zip"
                downloadFile="true"
              />

              <TechnologiesProjects
                :imageUrl="require('@/assets/capture/eurofactura.jpg')"
                nameProject="Eurotopes Invoice System"
                description="Application to make sales"
                technologies="NODEJS, VUEJS, HTML, CSS, JAVASCRIPT, WIZZLE.CSS, WEBPACK"
                url="https://portafoliofrfweb.000webhostapp.com/downloads/eurotopes.zip"
                downloadFile="true"
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
                :imageUrl="require('@/assets/capture/serviciostelefonica.png')"
                nameProject="Servicios Telefonica"
                description="Website of sell mobiles"
                technologies="VUEJS, HTML, CSS, JAVASCRIPT, WIZZLE CSS"
                url="https://portafoliofrfweb.000webhostapp.com/downloads/seriviciostelefonica.zip"
                downloadFile="true"
              />

              <TechnologiesProjects
                :imageUrl="require('@/assets/capture/cell.com.pl.png')"
                nameProject="Cell.com.pl"
                description="Website of sell electronics, mobile and others"
                technologies="VUEJS, HTML, CSS, JAVASCRIPT, WIZZLE CSS"
                url="https://portafoliofrfweb.000webhostapp.com/downloads/cell.zip"
                downloadFile="true"
              />

              <TechnologiesProjects
                :imageUrl="
                  require('@/assets/capture/hotelsantiagodemacuot.png')
                "
                nameProject="hotelsantiagodemacuto"
                description="Site in under construction"
                technologies="HTML, CSS, JAVASCRIPT"
                url="https://portafoliofrfweb.000webhostapp.com/downloads/hotelsantiago.zip"
                downloadFile="true"
              />

              <TechnologiesProjects
                :imageUrl="require('@/assets/capture/itd.es.png')"
                nameProject="Divison of information technology - ITD"
                description="Divison of information technology website"
                technologies="HTML, CSS, JAVASCRIPT, NODEJS, GULPJS"
                url="https://portafoliofrfweb.000webhostapp.com/downloads/itd.zip"
                downloadFile="true"
              />

              <TechnologiesProjects
                :imageUrl="
                  require('@/assets/capture/politicalintersectionblog.png')
                "
                nameProject="politicalintersectionblog"
                description="Website type blog"
                technologies="HTML, CSS, VUEJS, JAVASCRIPT"
                url="https://portafoliofrfweb.000webhostapp.com/downloads/political.zip"
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
                :imageUrl="require('@/assets/capture/proyectoshappy.png')"
                nameProject="Proyectos Happy 3000 C.A"
                description="Website of servicies"
                technologies="WORDPRESS"
                url="https://proyectoshappy.com/"
                downloadFile="false"
              />

              <TechnologiesProjects
                :imageUrl="require('@/assets/capture/elcorreord.png')"
                nameProject="El CorreoRD"
                description="Website of noticies"
                technologies="WORDPRESS"
                url="https://elcorreord.com/"
                downloadFile="false"
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
                :imageUrl="require('@/assets/capture/indpls.in.png')"
                nameProject="indpls.in"
                description="Website of indianapolis"
                technologies="MAPSERVER, OPENLAYERS, STRAPI, EXPRESS, EJS, WIZZLE.CSS, JAVASCRIPT, WEBSCRAPPING"
                url="https://indpls.in/"
                downloadFile="false"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL WEB VIDEO EDITOR-->
      <div
        class="flex absolute w-full h-screen justify-center items-center bg-neutral-800 item-hide"
        id="modal_editor"
      >
        <div
          class="w-11/12 h-5/6 border-slate-100 border rounded-sm p-10 overflow-y-scroll"
        >
          <div class="text-right">
            <span class="cursor-pointer" v-on:click="open_panel('editor')"
              ><i class="fa fa-times" aria-hidden="true"></i
            ></span>
          </div>
          <div>
            <h3 class="text-center text-3xl text-font-exo">VIDEO EDITOR</h3>
          </div>
          <div class="m-2">
            <p class="text-center text-lg text-font-exo">Projects</p>
          </div>
          <div class="mt-2">
            <div
              class="grid lg:grid-rows-3 lg:grid-cols-4 lg:grid-flow-col gap-4 sm:grid-rows-6 sm:grid-cols-2"
            >
              <div>
                <iframe
                  src="https://www.youtube.com/embed/LYStG7nBuIg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/UJcISdvKSmo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/OwKL7_udpaA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/tmhZXF5JgQM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://www.instagram.com/p/CcWKetugC0f/embed"
                  title="Instagram video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://www.instagram.com/p/CYmr97kqZjc/embed"
                  title="Instagram video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/i-T2Bfi0-f4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://www.instagram.com/p/CRy0NstBwYr/embed"
                  title="Instagram video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/jHIeDG4JS18"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/4X8ssCtqOOc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/_HZTOUIM_WQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/zkdn3mtd1Ik"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TechnologiesImages from "./components/TechnologiesImages.vue";
import TechnologiesProjects from "./components/TechnologiesProjects.vue";
import ExperiencesComponent from "./components/ExperiencesComponent.vue";
import CertificateComponent from "./components/CertificateComponent.vue";
export default {
  name: "App",
  components: {
    TechnologiesImages,
    TechnologiesProjects,
    ExperiencesComponent,
    CertificateComponent,
  },
  methods: {
    open_panel(item) {
      let getModalItem = document.getElementById("modal_" + item);
      if (getModalItem.classList.contains("item-hide") == true) {
        getModalItem.classList.add("item-show");
        getModalItem.classList.remove("item-hide");
      } else {
        getModalItem.classList.remove("item-show");
        getModalItem.classList.add("item-hide");
      }
    },
    open_item_menu(item) {
      let getContentItem = document.getElementById("content_" + item);
      if (getContentItem.classList.contains("hidden") == true) {
        getContentItem.classList.remove("hidden");
        setTimeout(() => {
          if (getContentItem.classList.contains("item-hide") == true) {
            getContentItem.classList.add("item-show");
            getContentItem.classList.remove("item-hide");
          }
        }, 200);
      } else {
        getContentItem.classList.remove("item-show");
        getContentItem.classList.add("item-hide");
        setTimeout(() => {
          getContentItem.classList.add("hidden");
        }, 1000);
      }
    },
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
.item-hide {
  transition: all ease-in-out 1s;
  opacity: 0;
  z-index: -3;
}
.item-show {
  transition: all ease-in-out 1s;
  opacity: 1;
  z-index: 20;
}
iframe {
  width: 100%;
  height: 250px;
}
div.overflow-y-scroll::-webkit-scrollbar,
div.overflow-y-scroll::-webkit-scrollbar {
  width: 10px;
  background: none;
  height: 5px;
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
  h1 {
    font-size: 32px !important;
  }
  #content_about .grid-rows {
    height: 45em;
  }
  .technologies-fix {
    grid-template-rows: repeat(2, minmax(0, 1fr)) !important;
    grid-template-columns: none !important;
    justify-content: center;
  }
  .grid-rows-fixed {
    grid-template-rows: repeat(9, minmax(0, 1fr)) !important;
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
