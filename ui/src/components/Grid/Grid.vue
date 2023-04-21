<template>
  <table>
    <Row v-for="item in table" v-bind:key="item.id" v-bind:item="item"></Row>
  </table>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { IDataItem } from '@/types/index.d';
import Row from './Row.vue';

@Options({
  props: {
    table: Array,
    count: Number,
  },
  components: {
    Row,
  },
})
export default class Grid extends Vue {
  public table!: Array<IDataItem>;

  public count!: number;
}
</script>

<style lang="scss" scoped>
table {
  padding: 0 60px;
  width: 100%;
  display: grid;
}
</style>
