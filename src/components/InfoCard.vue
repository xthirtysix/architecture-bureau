<template lang="pug">
article.card
  .text-wrapper(v-for="(i, idx) in item.content", :key="idx")
     h3(v-if="i.type === 'header'").card-header.card-main-header {{ i.text }}
     ul(v-else-if="i.type === 'list'")
       li(v-for="(li, index) in i.text.split(';')", :key="index") {{ li }}
     p(v-else) {{ i.text }}
</template>

<script>
export default {
  name: "info-card",
  props: {
    item: Object
  },
  directives: {
    tabindex: {
      inserted(el) {
        el.setAttribute("tabindex", 0);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

@include progressive-images;

.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  background-color: $background-color;
}

.text-wrapper {
  padding: 0.1rem;

  &:last-child {
    padding-bottom: 1rem;
  }

  p {
    margin: 0 0 0.5rem;
  }
}

li::marker {
  color: $accent-color;
}

.card-header,
.card-paragraph {
  display: inline;
  margin: 0;
}

.card-header {
  font-size: 1.85rem;
  margin-right: 0.1rem;
  margin-bottom: 0.3rem;
}

.card-main-header {
  @include underline(3rem, false);
  display: block;
  margin-bottom: 1rem;
}
</style>
