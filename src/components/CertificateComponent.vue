<template>
  <div>
    <img :src="certificateImage" :alt="name" class="w-full h-full">
  </div>
</template>

<script>
export default {
  name: 'CertificateComponent',
  props: {
    certificateImage: String,
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
