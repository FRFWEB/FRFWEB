<script setup>
import { defineProps } from "vue";
const props = defineProps({
  projects: Array,
  title: String,
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
        class="2xl:basis-3/12 xl:basis-3/12 lg:basis-5/12 md:basis-5/12 sm:basis-full xs:basis-full my-4"
        v-for="(project, index) in props.projects"
        :key="index"
      >
        <div class="bg-white p-4 shadow-lg shadow-black">
          <img
            :src="require(`@/assets/img/projects/${project.image}`)"
            :alt="project.name"
            class="w-full"
          />
          <div>
            <h4 class="text-russo-one text-3xl text-center my-4">
              {{ project.name }}
            </h4>
            <p class="text-silkscreen text-sm pb-2 border-stone-900 border-b-2">
              {{ project.description }}
            </p>
            <p class="text-silkscreen mt-2 text-sm">
              Skills: {{ project.skills }}
            </p>
          </div>
          <div>
            <a
              :href="project.project_url"
              class="text-silkscreen bg-neutral-900 text-white py-2 w-full block text-center mt-4"
              >Check Project</a
            >
            <a
              :href="project.project_video"
              class="text-silkscreen bg-neutral-900 text-white py-2 w-full block text-center mt-2"
              >Check video</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectsComponent",
};
</script>
