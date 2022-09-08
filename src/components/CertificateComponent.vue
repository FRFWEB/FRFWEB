<template>
  <div
    class="xl:w-60 h-64 lg:w-48 md:w-48 sm:w-36 xl:h-44 lg:h-44 md:h-full sm:basis-2/5"
  >
    <img :src="certificateImage" :alt="name" class="w-full h-full" />
  </div>
</template>

<script>
export default {
  name: "CertificateComponent",
  props: {
    certificateImage: String,
    name: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
