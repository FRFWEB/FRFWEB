<template>
  <div class="mx-1 sm:basis-2/5">
    <div
      v-if="downloadFile == 'true'"
      class="xl:w-60 h-64 lg:w-48 md:w-full sm:w-36"
    >
      <div class="shadow-md shadow-slate-400 rounded-b w-full h-full relative">
        <img :src="imageUrl" :alt="nameProject" class="h-full w-full" />
        <div
          class="bg-slate-100 text-black text-center p-1 absolute bottom-0 w-full opacity-0 transition-opacity hover:opacity-100"
        >
          <h3 class="text-font-exo font-bold">{{ nameProject }}</h3>
          <p class="text-font-exo m-2">{{ description }}</p>
          <p class="text-font-exo font-bold text-xs">{{ technologies }}</p>
          <a :href="url" download class="m-2 p-1 block bg-slate-400"
            ><span>Download .zip file</span></a
          >
        </div>
      </div>
    </div>
    <div v-else class="xl:w-60 h-64 lg:w-48 md:w-full sm:w-36">
      <div class="shadow-md shadow-slate-400 rounded-b w-full h-full relative">
        <img :src="imageUrl" :alt="nameProject" class="h-full w-full" />
        <div
          class="bg-slate-100 text-black text-center p-1 absolute bottom-0 w-full opacity-0 transition-opacity hover:opacity-100"
        >
          <h3 class="text-font-exo font-bold">{{ nameProject }}</h3>
          <p class="text-font-exo m-2">{{ description }}</p>
          <p class="text-font-exo font-bold text-xs">{{ technologies }}</p>
          <a :href="url" target="_blank" class="m-2 p-1 block bg-slate-400"
            ><span>Check Website</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnologiesProjects",
  props: {
    imageUrl: String,
    nameProject: String,
    description: String,
    technologies: String,
    url: String,
    downloadFile: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
