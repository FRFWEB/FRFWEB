<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: String,
  first_paragraph: String,
  second_paragraph: String,
  image: String,
  first_link: Object,
  second_link: Object,
  third_link: Object,
});
</script>
<template>
  <div
    class="flex 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap xs:flex-wrap flex-row mt-4 px-4 justify-center items-center border-b-2 border-neutral-900 pb-4"
  >
    <div
      class="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/6 md:basis-full sm:basis-full xs:basis-full 2xl:mr-0 xl:mr-0 lg:mr-0 md:mr-0 2xl:ml-auto xl:ml-auto lg:ml-auto md:ml-auto sm:mx-auto"
    >
      <img
        :src="require(`@/assets/img/characters/${props.image}`)"
        alt="web developer"
        class="w-40 block mx-auto my-4"
      />
    </div>
    <div
      class="2xl:basis-2/5 xl:basis-2/5 lg:basis-7/12 md:basis-full sm:basis-full xs:basis-full mr-auto"
    >
      <h2 class="text-russo-one text-4xl">
        {{ props.title }}
      </h2>
      <p class="mt-2 text-silkscreen">
        {{ props.first_paragraph }}
      </p>
      <p class="mt-2 text-silkscreen">
        {{ props.second_paragraph }}
      </p>
      <div class="flex flex-row gap-4 mt-4 presentation--buttons">
        <div
          class="2xl:basis-5/12 xl:basis-5/12 lg:basis-5/12 md:basis-full sm:basis-full xs:basis-full"
          v-if="props.second_link.name != ''"
        >
          <a
            :href="props.first_link.url"
            target="_blank"
            class="text-silkscreen bg-black text-white hover:bg-neutral-800 w-full py-2 block text-center"
          >
            <i :class="props.first_link.icon"></i> {{ props.first_link.name }}
          </a>
        </div>
        <div
          class="2xl:basis-5/12 xl:basis-5/12 lg:basis-5/12 md:basis-full sm:basis-full xs:basis-full"
          v-if="props.second_link.name != ''"
        >
          <a
            target="_blank"
            :href="props.second_link.url"
            class="text-silkscreen bg-black text-base text-white hover:bg-neutral-800 w-full py-2 block text-center"
          >
            <i :class="props.second_link.icon"></i> {{ props.second_link.name }}
          </a>
        </div>
        <div
          class="2xl:basis-5/12 xl:basis-5/12 lg:basis-5/12 md:basis-full sm:basis-full xs:basis-full"
          v-if="props.second_link.name != ''"
        >
          <a
            target="_blank"
            :href="props.third_link.url"
            class="text-silkscreen bg-black text-base text-white hover:bg-neutral-800 w-full py-2 block text-center"
          >
            <i :class="props.third_link.icon"></i> {{ props.third_link.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PresentationComponent",
};
</script>
