<template>
  <div>
    <div class="sm:basis-2.5">
      <img
        :src="imageUrl"
        :alt="altName"
        class="xl:w-20 lg:w-12 rounded-lg mx-2 my-1 item-tech"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnologiesImages",
  props: {
    imageUrl: String,
    altName: String,
  },
};
</script>
