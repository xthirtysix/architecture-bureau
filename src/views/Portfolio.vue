<template lang="pug">
  .portfolio
    h1.main-header.visually-hidden Portfolio
    ul.card-list
      li(v-for="(item, idx) in portfolio", :key="idx")
        portfolio-card(:item="item" @clicked="onClickChild")
    viewer(:images="images", ref="viewer")
      img(
        v-for="(img, idx) in images",
        :src="img.pathLong",
        :key="idx",
        style="display: none"
      )
</template>

<script>
import PortfolioCard from "../components/PortfolioCard.vue";
import VueViewer from "v-viewer";
import Vue from "vue";
Vue.use(VueViewer);

export default {
  components: {
    PortfolioCard
  },
  computed: {
    portfolio: function() {
      return this.$store.getters.portfolio;
    }
  },
  data() {
    return {
      images: []
    };
  },
  methods: {
    onClickChild(value) {
      this.images = value;
      this.$viewer.show();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
@import "@/styles/variables.scss";

.portfolio {
  @include container;
  max-width: 1300px;
  padding-top: 0;
}

.main-header {
  @include visually-hidden;
}

.card-list {
  @include grid-table;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.3rem 2rem;
  padding-bottom: 2rem;
}

@media (max-width: $mobile) {
  .portfolio {
    width: 100%;
  }
}
</style>
