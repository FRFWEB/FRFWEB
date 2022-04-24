<template>
  <div>
    <div class="technologies-container">
       <img :src="imageUrl" :alt="altName" class="w-full h-full">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnologiesImages',
  props: {
    imageUrl: String,
    altName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.technologies-container{
  width: 50px;
  height: 50px;
}
</style>
