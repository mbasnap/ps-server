<template>
<div class="range">
<ul  class="list-group list-group-horizontal">
  <li v-for="(item, i) in range" :key="item"
  :class="['list-group-item', { active: month.format('MMMM') === item }]"
  @click="selectMonth(i)"
  >{{ item }}</li>
</ul>
</div>
</template>

<script>
export default {
    props: { value: Number, range: Array, year: Object },
    computed: {
      month({ year, value }) {
        return year.month(value - 1)
      },
    },
    methods: {
      selectMonth(v) {        
        this.$emit('input', v + 1)
      }
    }
}
</script>

<style>

</style>