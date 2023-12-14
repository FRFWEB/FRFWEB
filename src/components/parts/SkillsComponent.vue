<script setup>
import { defineProps } from "vue";

const props = defineProps({
  skills: Array,
  title: String,
  folder: String,
});
</script>
<template>
  <div>
    <div class="flex flex-row my-4">
      <div class="flex-1">
        <h3 class="text-russo-one text-4xl text-center">{{ props.title }}</h3>
      </div>
    </div>
    <div
      class="flex flex-row gap-4 justify-center flex-wrap border-b-2 border-neutral-900 pb-4"
    >
      <div
        class="2xl:basis-1/6 xl:basis-1/6 lg:basis-1/6 md:basis-3/12 sm:basis-5/12 xs:basis-5/12 my-4"
        v-for="(skill, index) in props.skills"
        :key="index"
      >
        <img
          :src="
            props.folder == 'developer'
              ? require(`@/assets/img/skills-web/${skill}.png`)
              : require(`@/assets/img/skills-editor/${skill}.png`)
          "
          :alt="skill"
          class="w-40 block mx-auto rounded-xl shadow-lg shadow-black skill-animation"
        />
        <p class="text-silkscreen text-center mt-4">{{ skill }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillsComponent",
};
</script>
