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
      :title="videEditor.title"
      :first_paragraph="videEditor.first_paragraph"
      :second_paragraph="videEditor.second_paragraph"
      :image="videEditor.image"
      :first_link="videEditor.first_link"
      :second_link="videEditor.second_link"
    />

    <!-- SKILLS -->
    <SkillsComponent
      :skills="skillsVideEditor"
      title="My skills"
      folder="editor"
    />

    <!-- PLATFORM EXPERIENCE -->
    <SkillsComponent
      :skills="platformsVideEditor"
      title="Platform experience"
      folder="editor"
    />

    <!-- OTHER SKILLS -->
    <SkillsComponent
      :skills="othersSkillsVideEditor"
      title="Others skills or tools"
      folder="editor"
    />

    <!-- RETURN  TO HOME -->
    <div class="flex flex-row mb-20 mt-8 justify-center">
      <div
        class="2xl:basis-1/2 lg:basis-1/2 xl:basis-1/2 md:basis-1/2 sm:basis-1/2 xs:basis-full"
      >
        <button
          @click="getScenaValue"
          value="backEditorScene"
          class="outline-none w-full block 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl xs:text-xl sm:text-xl mx-auto bg-black text-white hover:bg-neutral-800 py-2 text-silkscreen"
        >
          Return and change character
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import SkillsComponent from "./parts/SkillsComponent.vue";
import PresentationComponent from "./parts/PresentationComponent.vue";
export default {
  name: "VideoEditorComponent",
  components: {
    SkillsComponent,
    PresentationComponent,
  },
  data() {
    return {
      videEditor: {
        title: "Hi, my name is Francisco, I'm a Video Editor",
        first_paragraph:
          "I have 3 years creating videos independently and also working in a personalized way based on the client's needs, I have experience in the platforms of YouTube, Instagram, Tiktok and onlyfans, content creation using AI and resource folder for memes and editing some niche.",
        second_paragraph:
          "I am a dedicated and detailed person when editing, I like to be creative and try new editing techniques, I do not limit myself to learning new tools and editing management.",
        image: "editor.webp",
        first_link: {
          name: "Check my folder",
          icon: "fas fa-play-circle",
          url: "#",
        },
        second_link: {
          name: "Check my resume",
          icon: "fas fa-file ",
          url: "#",
        },
      },
      skillsVideEditor: ["capcut", "vegas_pro", "movavi"],
      platformsVideEditor: ["youtube", "facebook", "tiktok"],
      othersSkillsVideEditor: ["photopea"],
    };
  },
};
</script>
