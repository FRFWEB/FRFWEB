<template>
  <div>
    <div class="shadow-md shadow-slate-400 rounded-b w-full">
      <img :src="imageUrl" :alt="nameProject" class="h-60 w-full">
       <div class="bg-slate-100 text-black text-center p-1">
         <h3 class="text-font-exo font-bold">{{nameProject}}</h3>
         <p class="text-font-exo m-2">{{description}}</p>
         <p class="text-font-exo font-bold text-xs">{{technologies}}</p>
         <a href="#" :download="fileDownload" class="m-2 p-1 block bg-slate-400"><span>Download .zip file</span></a>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnologiesProjects',
  props: {
    imageUrl: String,
    nameProject: String,
    description: String,
    technologies: String,
    fileDownload: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
