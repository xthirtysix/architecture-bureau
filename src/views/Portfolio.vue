<template lang="pug">
.portfolio
  h1.main-header.visually-hidden Portfolio
  ul.card-list
    li(v-for="(item, idx) in portfolio", :key="idx")
      //info-card(v-if="item.type === 'Info'")(:item="item")
      portfolio-card(:item="item")
  viewer(:images="images", @inited="inited", ref="viewer")
    img(
      v-for="(img, idx) in images",
      :src="img.pathLong",
      :key="idx",
      style="display: none"
    )
</template>

<script>
import PortfolioCard from "../components/PortfolioCard.vue";
import InfoCard from "../components/InfoCard.vue";

export default {
  components: { PortfolioCard, InfoCard },
  computed: {
    portfolio: function() {
      return this.$store.getters.portfolio;
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
