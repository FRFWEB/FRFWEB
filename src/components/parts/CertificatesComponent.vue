<script setup>
import { defineProps } from "vue";
const props = defineProps({
  certificates: Array,
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
      class="flex flex-row gap-5 justify-center flex-wrap border-b-2 border-neutral-900 pb-4"
    >
      <div
        class="2xl:basis-1/4 xl:basis-1/4 lg:basis-2/5 md:basis-2/5 sm:basis-2/5 xs:basis-full my-2"
        v-for="(certificate, index) in props.certificates"
        :key="index"
      >
        <div class="bg-white p-4 shadow-lg shadow-black">
          <img
            :src="require(`@/assets/img/certificates/${certificate.image}.jpg`)"
            :alt="certificate.name"
            class="2xl:h-72 lg:h-72 xl:h-72 md:h-56 sm:h-56 xs:h-56 block mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CertificatesComponent",
};
</script>
