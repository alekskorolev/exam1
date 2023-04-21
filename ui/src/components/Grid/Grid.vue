<template>
  <table>
    <HeadRow v-bind:sort="$store.state.sort"></HeadRow>
    <Row v-for="item in table" v-bind:key="item.id" v-bind:item="item"></Row>
    <Row v-bind:item="summItem" extraClass="summ"></Row>
  </table>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { IDataItem } from '@/types/index.d';
import Row from './Row.vue';
import HeadRow from './HeadRow.vue';

@Options({
  props: {
    table: Array,
    count: Number,
  },
  components: {
    Row,
    HeadRow,
  },
})
export default class Grid extends Vue {
  public table!: Array<IDataItem>;

  public count!: number;

  public get summItem() {
    const { viewSend, viewPay } = this.$store.state.summ;
    return {
      title: 'Итого:',
      ...this.$store.state.summ,
      viewSend: `${viewSend}%`,
      viewPay: `${viewPay}%`,
    };
  }
}
</script>

<style lang="scss" scoped>
table {
  padding: 0 60px;
  width: 100%;
  display: grid;
}
</style>
