<template lang="pug">
.portfolio
  h1.main-header Portfolio
  ul.card-list
    li(v-for="(item, idx) in portfolio", :key="idx")
      portfolio-card(:item="item")
</template>

<script>
import PortfolioCard from "../components/PortfolioCard.vue";

export default {
  components: { PortfolioCard },
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
}

.main-header {
  @include main-header;
  @include underline(100px, false);
  position: relative;
  margin-bottom: 2rem;
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
