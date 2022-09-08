import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import anime from "animejs/lib/anime.es.js";

createApp(App).mount("#app");

/* ANIMATIONS */

//index or title page
let title = anime.timeline({
  targets: ".text-title",
});
title.add({
  scale: 0.2,
  duration: 700,
});
title.add({
  scale: 1,
  duration: 700,
});

//animation social networks
let networks = anime.timeline({
  targets: ".networks-links",
});

networks.add({
  scale: 0,
  duration: 800,
});
networks.add({
  scale: 1,
  delay: anime.stagger(200), // increase delay by 100ms for each elements.
});

//animatcion tecnologias
let iTemsTechnologies = document.querySelectorAll(".item-tech");
iTemsTechnologies.forEach((item, index) => {
  let technologies = anime.timeline({
    //targets: item,
    easing: "easeOutExpo",
    duration: 1800,
    loop: true,
    delay: 20 * index,
    //rotateY: "45deg"
  });
  technologies.add({
    targets: item,
    rotateY: 0,
  });
  technologies.add({
    targets: item,
    rotateY: 360,
  });
});
