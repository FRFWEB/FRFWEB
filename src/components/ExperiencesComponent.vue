<template>
  <div>
    <div class="border-white border-2 border-solid text-center p-4 rounded">
        <p>{{nameExperience}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperiencesComponent',
  props: {
    nameExperience: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
