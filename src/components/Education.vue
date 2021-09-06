<template lang="pug">
ul.table.education-table
  li(v-for="(item, index) in education", :key="index")
    h3.table-header.institution {{ item.name }}
    p.table-paragraph.description {{ item.description }}
    p.table-paragraph.years {{ item.years }}
</template>

<script>
export default {
  computed: {
    education: function() {
      return this.$store.getters.education;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.table {
  @include grid-table;
}

.table-header {
  font-size: 1.1rem;
}

.table-paragraph {
  font-size: 1rem;
}
</style>
