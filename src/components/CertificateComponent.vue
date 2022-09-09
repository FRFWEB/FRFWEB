<template>
  <div
    class="xl:w-44 h-64 lg:w-48 md:w-48 sm:w-36 xl:h-44 xl:basis-1/4 lg:h-44 md:h-full md:basis-2/4 sm:basis-2/4"
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
