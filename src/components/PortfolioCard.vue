<template lang="pug">
  article.card
    .text-wrapper
      h3.card-header.card-main-header {{ item.name }}
      .container
        h4.card-header.visually-hidden(v-if="item.activity") Локация
        p.card-paragraph(v-if="item.location") {{ item.location }}
          span(v-if="item.acreage") &nbsp;{{ item.acreage }} м
            sup 2
      .container
        h4.card-header.visually-hidden(v-if="item.activity") Активность
        p.card-paragraph(v-if="item.activity") {{ item.activity }}
    p.preview-container(v-tabindex, @click="onImageClick", v-on:keyup.enter="onImageClick")
      img.preview-image(
        :src="item.preview",
        :alt="item.name"
      )
</template>

<script>
export default {
  name: "portfolio-card",
  props: {
    item: {
      name: { type: String },
      location: { type: String },
      acreage: { type: String },
      activity: { type: String },
      import: { type: Function }
    }
  },
  data: function() {
    return {
      images: []
    };
  },
  mounted() {
    this.importAll(this.item.images);
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
    onImageClick() {
      this.$emit("clicked", this.images);
    }
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
  @include interactive-with-shadow;
  @include transition(0.5s);

  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  border-radius: 5px;
  background-color: $background-color;
}

.text-wrapper {
  padding: 1rem;
}

.container {
  margin-bottom: 0.2rem;
}

.preview-container {
  @include interactive-image-open-tip;
  z-index: 101;
  order: -1;
  overflow: hidden;
  height: 0;
  padding-bottom: 56%;
  margin: 0;
  line-height: 0;
  cursor: pointer;
  outline: none;

  &:hover {
    .preview-image {
      transform: scale(1.05);
    }
  }
}

@media (max-width: 768px) {
  .preview-container {
    &::before {
      opacity: 1;
    }
  }
}

.preview-image {
  @include transition(1s);

  width: 100%;
  width: -moz-available; /* WebKit игнор. */
  // eslint-disable-next-line
  width: -webkit-fill-available; /* Mozilla игнор. */
  // eslint-disable-next-line
  width: stretch;
  height: auto;
  background-color: $background-color-inversed;
}

.card-header,
.card-paragraph {
  display: inline;
  margin: 0;
}

.card-header {
  margin-right: 0.1rem;
  margin-bottom: 0.3rem;
}

.card-main-header {
  @include underline(3rem, false);
  display: block;
  margin-bottom: 1rem;
}
</style>
