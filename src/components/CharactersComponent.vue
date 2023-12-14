<script setup>
import { defineProps, defineEmits } from "vue";
const emmit = defineEmits("getScenaValue");
const props = defineProps({
  title: String,
  image: String,
  buttonValue: String,
  background: String,
});

const getScenaValue = (e) => {
  emmit("valueScena", e.target.value);
};
</script>
<template>
  <div
    class="2xl:basis-3/6 xl:basis-3/6 lg:basis-3/6 md:basis-3/6 container-characters--card text-center"
  >
    <div :class="props.background + ' h-screen w-full'">
      <div class="flex flex-col gap-4 h-full items-center justify-center">
        <div>
          <p class="text-press-start-2p text-white">{{ props.title }}</p>
        </div>
        <div>
          <img
            :src="require(`@/assets/img/characters/${props.image}`)"
            alt=" {{ props.title }} "
            class="w-auto 2xl:h-52 xl:h-52 lg:h-52 md:h-52 block mx-auto my-5 character"
          />
        </div>
        <div>
          <button
            @click="getScenaValue"
            :value="props.buttonValue"
            class="outline-none bg-white text-dark hover:bg-slate-300 hover:text-dark w-56 py-1 text-russo-one mx-5"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CharactersComponent",
};
</script>
<style scoped>
@media screen and (min-width: 300px) and (max-width: 420px) {
  .container-characters--card {
    flex-basis: 100%;
  }
  .character {
    height: 17rem;
  }
}
</style>
