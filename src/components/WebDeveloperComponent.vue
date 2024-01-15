<script setup>
import { defineEmits } from "vue";

//CAPTURE EMMIT DATA
const emmit = defineEmits("getScenaValue");
const getScenaValue = (e) => {
  emmit("valueScena", e.target.value);
};
</script>
<template>
  <div>
    <!-- PRESENTATION -->
    <PresentationComponent
      :title="developer.title"
      :first_paragraph="developer.first_paragraph"
      :second_paragraph="developer.second_paragraph"
      :image="developer.image"
      :first_link="developer.first_link"
      :second_link="developer.second_link"
      :third_link="developer.third_link"
    />

    <!-- SKILLS -->
    <SkillsComponent
      :skills="skillsDeveloper"
      title="My skills"
      folder="developer"
    />

    <!-- OTHER SKILLS -->
    <SkillsComponent
      :skills="othersSkillsDeveloper"
      title="Others skills or tools"
      folder="developer"
    />

    <!-- ARQUITECTURE -->
    <SkillsComponent
      :skills="arquitecturesDeveloper"
      title="Methodology or arquitecture of job"
      folder="developer"
    />

    <!-- MY PROJECTS -->
    <ProjectsComponent :projects="projectsDeveloper" title="My projects" />

    <!-- CERITIFCATES -->
    <CertificatesComponent
      :certificates="certificatesDeveloper"
      title="My certificates"
    />

    <!-- RETURN  TO HOME -->
    <div class="flex flex-row mb-20 mt-8 justify-center">
      <div
        class="2xl:basis-1/2 lg:basis-1/2 xl:basis-1/2 md:basis-1/2 sm:basis-1/2 xs:basis-full"
      >
        <button
          @click="getScenaValue"
          value="backWebScene"
          class="outline-none w-full block 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl xs:text-xl sm:text-xl mx-auto bg-black text-white hover:bg-neutral-800 py-2 text-silkscreen"
        >
          Return and change character
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectsComponent from "./parts/ProjectsComponent.vue";
import SkillsComponent from "./parts/SkillsComponent.vue";
import CertificatesComponent from "./parts/CertificatesComponent.vue";
import PresentationComponent from "./parts/PresentationComponent.vue";

export default {
  name: "WebDeveloperComponent",
  components: {
    ProjectsComponent,
    SkillsComponent,
    CertificatesComponent,
    PresentationComponent,
  },
  data() {
    return {
      developer: {
        title: "Hi, my name is Francisco, I'm a Full Stack Web Developer",
        first_paragraph:
          " Full Stack Web Developer with +4 years of experience, using Vue.js in the Front-End as the main language. The Node.js Back-end with Express.js or Laravel, as well as the database management and integration with MariaDB, MongoDB or SleekDB.",
        second_paragraph:
          "I am a person dedicated and passionate about what I do, I like challenges and good teams, likewise I do not limit my learning and I adapt to any ecosystem",
        image: "developer.webp",
        first_link: {
          name: "Github",
          icon: "fab fa-github",
          url: "https://github.com/frfcode",
        },
        second_link: {
          name: "Linkedin",
          icon: "fab fa-linkedin-in",
          url: "https://www.linkedin.com/in/frfcode/",
        },
        third_link: {
          name: "Resume",
          icon: "fas fa-file",
          url: "/cv/cvFranciscoGarcia.pdf",
        },
      },
      skillsDeveloper: [
        "laravel",
        "vue",
        "express",
        "strapi",
        "tailwind",
        "node",
        "sql",
        "sass",
        "html",
        "css",
        "javascript",
        "jquery",
        "electron",
        "php",
        "vite",
        "wordpress",
        "bootstrap",
        "payload",
        "mongodb",
        "mysql",
      ],
      othersSkillsDeveloper: [
        "github",
        "seo",
        "figma",
        "photopea",
        "cpanel",
        "postman",
        "xampp",
        "laragon",
        "wampserver",
      ],
      arquitecturesDeveloper: ["mevn", "bem", "mobile_first", "pwa"],
      projectsDeveloper: [
        {
          name: "plomerosatualcance",
          project_url: "#",
          description:
            "I built an informative website to offer plumbing services, it also has a section for recruiting personnel and a contact area, the UI was created using figma and is under the concept of SPA using vuejs + bootstrap and email management with emailjs.",
          project_video: "https://screenpal.com/watch/cZVoDEVJQPs",
          skills: "html, css, javascript, vue, emailjs, bootstrap.",
          image: "plomerosatualcance.png",
        },
        {
          name: "plomeros911",
          project_url: "#",
          description:
            "I built an informative website to offer plumbing services, it also has a section for recruiting personnel and a contact area, the UI was created using figma and is under the concept of SPA using vuejs + bootstrap and email management with emailjs.",
          project_video: "https://screenpal.com/watch/cZVjbfVH7bW",
          skills: "html, css, javascript, vue, emailjs, bootstrap.",
          image: "plomeros911.png",
        },
        {
          name: "fonseplus",
          project_url: "#",
          description:
            "I built the service platform using Laravel + Adminlte 3 + Sweetalert2 + jquery + Bootstrap + Select2. This system seeks to offer sales of independent accounts, packs or a complete account of the streaming service.",
          project_video: "https://screenpal.com/watch/cZVjbcVH7bh",
          skills:
            "html, css, javascript, laravel, jquery, adminlte, php, pusher, laravel-mail, bootstrap, sweetalert.",
          image: "fonseplus.png",
        },
        {
          name: "sdprimetv",
          project_url: "#",
          description:
            "I made a web application + PWA with Laravel that would allow product inventory control, customer management, invoice generator and content management.",
          project_video: "https://screenpal.com/watch/c0l6eXVmGnh",
          skills:
            "html, css, javascript, laravel, jquery, adminlte, php, pusher, laravel-mail, tailwind, bootstrap, sweetalert, pwa.",
          image: "sdpriemtv.png",
        },
        {
          name: "wizzle.work",
          project_url: "#",
          description:
            "wizzle.work was created to be a CSS framework called wizzle.css and it provides several tools, such as page generator, usage documentation, icon generator and image to CSS conversion.",
          project_video: "https://screenpal.com/watch/c0ll0iVmL1w",
          skills: "ejs, express, html, css, sass, javascript, nodejs.",
          image: "wizzle_work.png",
        },
        {
          name: "ht.fo",
          project_url: "#",
          description:
            "I created a website that allows links to be shortened according to the URL provided, and also allows the registration of users and purchase plans according to need.",
          project_video: "#",
          skills: "mongodb, express, nodejs, vue.",
          image: "ht_fo.png",
        },
        {
          name: "Compassionate Care Rehab",
          project_url: "#",
          description:
            "I created an informative website in WordPress in order to offer care services for the elderly, offering stays in the Dominican Republic Jarabacoa.",
          project_video: "https://screenpal.com/watch/c0l6eZVmGnK",
          skills: "wordpress",
          image: "compassionate_care_rehab.png",
        },
        {
          name: "SS scrapper",
          project_url: "#",
          description:
            "I made a desktop application which uses web scrapping techniques to obtain the product catalog of the Shein brand.",
          project_video: "https://screenpal.com/watch/c0ll02VmLi3",
          skills:
            "electronjs, javascript, html, css, nodejs, cherrio, puppeteer",
          image: "ss_scrapper.png",
        },
        {
          name: "proyectos happy 3000 C.A",
          project_url: "#",
          description:
            "I made an informative website in WordPress in order to offer installation services for CCTV cameras, web development, technology infrastructure, among others.",
          project_video: "https://screenpal.com/watch/c0l6eZVmGn7",
          skills: "wordpress",
          image: "proyectos_happy_3000.png",
        },
        {
          name: "eselvehiculo",
          project_url: "https://github.com/frfcode/eselvehiculo",
          description:
            "I made a web application + PWA with Laravel that would allow product inventory control, customer management, invoice generator and content management.",
          project_video: "https://screenpal.com/watch/c0l6fQVmGhI",
          skills:
            "html, css, javascript, laravel, jquery, adminlte, bootstrap, php, pwa.",
          image: "eselvehiculo.png",
        },
        {
          name: "fakealofok music",
          project_url: "https://github.com/frfcode/fakealofok-music",
          description:
            "The UI of a page called alofoke-music.net was charitably redesigned. for visual improvement.",
          project_video: "https://screenpal.com/watch/c0llrOVmM75",
          skills: "html, css, javascript vue.",
          image: "fakealofok-music.png",
        },
        {
          name: "Infinite anime scroll",
          project_url: "https://github.com/frfcode/infinite-anime-scroll",
          description:
            "It is a page whose focus is on infinite scrolling where its images are exchanged according to the value generated and the API consumed.",
          project_video: "https://screenpal.com/watch/c0llrhVmMHz",
          skills: "html, css, javascript vue, express, node, api.",
          image: "infinite-anime-scroll.png",
        },
      ],
      certificatesDeveloper: [
        {
          name: "certificate_1",
          image: "certificate_1",
        },
        {
          name: "certificate_2",
          image: "certificate_2",
        },
        {
          name: "certificate_3",
          image: "certificate_3",
        },
        {
          name: "certificate_4",
          image: "certificate_4",
        },
        {
          name: "certificate_5",
          image: "certificate_5",
        },
        {
          name: "certificate_6",
          image: "certificate_6",
        },
        {
          name: "certificate_7",
          image: "certificate_7",
        },
      ],
    };
  },
};
</script>
