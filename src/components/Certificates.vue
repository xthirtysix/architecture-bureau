<template lang="pug">
ul.list(
  v-viewer.static="{ movable: false, scalable: false, rotatable: false }"
)
  li.list-item(v-for="(item, idx) in certificates")
    v-lazy-image.image(
      :src="item.image",
      :src-placeholder="item.placeholder",
      :key="idx",
      :alt="`Certificate №${idx + 1}`"
    )
</template>

<script>
export default {
  computed: {
    certificates: function() {
      return this.$store.getters.certificates;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

@include progressive-images;

.list {
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.3rem;
  list-style: none;
}

.list-item {
  line-height: 0;
}

.image {
  @include interactive-with-shadow;

  cursor: pointer;
  width: 100%;
  height: auto;
}
</style>
