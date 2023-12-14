<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
});
</script>
<template>
  <div>
    <footer>
      <div class="fixed bottom-0 w-full">
        <p
          class="text-press-start-2p text-center text-sm uppercase py-4 bg-black text-white"
        >
          {{ props.title }}
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "FooterComponent",
};
</script>
