<script setup>
import { onMounted } from "vue";

//FUNCTION CHANGE ESCENE
const animationScene = (firstElement, secondElement) => {
  firstElement.classList.add("animate-content");
  firstElement.classList.remove("active-scene");
  secondElement.classList.remove("active-scene");
  setTimeout(() => {
    firstElement.classList.add("hidden");
    firstElement.classList.remove("animate-content");
    secondElement.classList.remove("hidden");
    window.scrollTo(0, 0);
    setTimeout(() => {
      secondElement.classList.add("active-scene");
    }, 80);
  }, 5000);
};

const animationLoading = () => {
  //CREATE DIV
  let createDiv = document.createElement("div");
  let createSpan = document.createElement("span");

  //CREATE ANIMATION
  createSpan.classList.add("circle");
  createDiv.appendChild(createSpan);
  document.querySelector("#app").appendChild(createDiv);
  setTimeout(() => {
    createDiv.remove();
  }, 5100);
};

const changeScene = (value) => {
  let getScene = value;

  //LOADING ANIMATION
  animationLoading();
  //GET CONTENTS FOR CHANGE ESCENE
  let getContent = document.querySelectorAll(".content");

  if (getScene == "videoEditor") {
    animationScene(getContent[0], getContent[2]);
    saveScene(getScene);
    return true;
  }

  if (getScene == "webDeveloper") {
    animationScene(getContent[0], getContent[1]);
    saveScene(getScene);
    return true;
  }

  if (getScene == "backWebScene") {
    animationScene(getContent[1], getContent[0]);
    saveScene("");
    return true;
  }

  if (getScene == "backEditorScene") {
    animationScene(getContent[2], getContent[0]);
    saveScene("");
    return true;
  }
  //SAVE SCENE
  function saveScene(scene) {
    if (scene == "") {
      sessionStorage.removeItem("scene");
    }
    sessionStorage.setItem("scene", scene);
  }
};

const enabledScene = () => {
  let getScene = sessionStorage.getItem("scene");
  let getContent = document.querySelectorAll(".content");

  if (getScene == "videoEditor") {
    animationLoading();
    getContent[0].classList.remove("active-scene");
    getContent[0].classList.add("hidden");
    animationScene(getContent[0], getContent[2]);
    return true;
  }

  if (getScene == "webDeveloper") {
    animationLoading();
    getContent[0].classList.remove("active-scene");
    getContent[0].classList.add("hidden");
    animationScene(getContent[0], getContent[1]);
    return true;
  }
};

onMounted(() => {
  enabledScene();
});
</script>

<template>
  <div>
    <div class="content active-scene">
      <div class="flex flex-row">
        <div class="w-full text-center">
          <h1
            class="text-press-start-2p 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl uppercase py-4 bg-black text-white"
          >
            you need me to work like...
          </h1>
        </div>
      </div>
      <div class="flex container-characters flex-row">
        <CharactersComponent
          title="Web Developer"
          image="developer.webp"
          buttonValue="webDeveloper"
          background="bg-neutral-500"
          @valueScena="changeScene"
        />

        <CharactersComponent
          title="Video Editor"
          image="editor.webp"
          buttonValue="videoEditor"
          background="bg-neutral-800"
          @valueScena="changeScene"
        />
      </div>
    </div>

    <!-- WEB DEVELOPER -->
    <div class="content hidden">
      <WebDeveloperComponent @valueScena="changeScene" />
    </div>

    <!-- VIDEO EDITOR -->
    <div class="content hidden">
      <VideoEditorComponent @valueScena="changeScene" />
    </div>

    <!-- FOOTER -->
    <FooterComponent title="created by @frfcode" />
  </div>
</template>

<script>
import VideoEditorComponent from "@/components/VideoEditorComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CharactersComponent from "@/components/CharactersComponent.vue";
import WebDeveloperComponent from "@/components/WebDeveloperComponent.vue";

export default {
  name: "App",
  components: {
    VideoEditorComponent,
    FooterComponent,
    CharactersComponent,
    WebDeveloperComponent,
  },
};
</script>

<style></style>
