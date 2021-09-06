<template lang="pug">
ul.table.experience-table
  li.table-item(v-for="(item, index) in experience", :key="index")
    h3.table-header.position {{ item.position }}
    div
      h4.table-header.company {{ item.company }}
      p.table-paragraph.description(v-if="item.description") {{ item.description }}
      p.table-paragraph.location(v-if="item.location")
        | {{ item.location.city ? item.location.city : null }}{{ item.location.link ? ', ' : null }}
        a.link(v-if="item.location.link", :href="item.location.link") {{ item.location.site ? item.location.site : null }}
      p.table-paragraph.years {{ item.years }}
</template>

<script>
export default {
  computed: {
    experience: function() {
      return this.$store.getters.experience;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.table {
  @include grid-table;
}

.table-item {
  display: grid;
  grid-template-columns: 30% 65%;
  grid-gap: 1.4rem;
  grid-template-areas: "position info";
  margin-bottom: 0.7rem;
}

.position,
.company {
  font-size: 1.1rem;
  word-break: break-word;
}

.company {
  font-weight: 400;
}

.description,
.location,
.years {
  font-size: 1rem;
}

.link {
  @include underline(100%, true);
  position: relative;
  color: inherit;
  outline: none;

  &::after {
    @include transition(0.4s);

    opacity: 0;
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }
}

@media (max-width: $mobile) {
  .table-item {
    grid-template-rows: 1fr;
    grid-gap: 0;
  }
}
</style>
