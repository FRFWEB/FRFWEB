import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import anime from 'animejs/lib/anime.es.js';

createApp(App).mount('#app')

/* ANIMATIONS */

let title = anime.timeline({
    targets: '.text-title'
});
title.add({
    scale: 0.2,
    duration: 700
})
title.add({
    scale: 1,
    duration: 700
})

let categoryItem = anime.timeline({
    targets: '.item-category'
})
categoryItem.add({
    scale: 0,
    duration: 1500
})

categoryItem.add({
    scale: 1,
    duration: 1700
})

let networks = anime.timeline({
    targets: '.networks-links'
});

networks.add({
    scale: 0,
    duration: 800
});
networks.add({
    scale: 1,
    delay: anime.stagger(200) // increase delay by 100ms for each elements.
});