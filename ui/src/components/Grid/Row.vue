<template>
  <tr class="row">
    <Cell v-bind:value="item.title" v-bind:level="level">
      <button v-on:click.prevent="toogleChild" v-if="hasChild">></button>
    </Cell>
    <Cell v-bind:value="item.countView"></Cell>
    <Cell v-bind:value="item.countPlay"></Cell>
    <Cell v-bind:value="item.countSend"></Cell>
    <Cell v-bind:value="item.countOrder"></Cell>
    <Cell v-bind:value="item.countPay"></Cell>
    <Cell v-bind:value="item.viewSend"></Cell>
    <Cell v-bind:value="item.viewPay"></Cell>
  </tr>
  <template v-if="hasChild && opened">
    <Row
      v-for="child in item.children"
      v-bind:key="child.id"
      v-bind:item="child"
      v-bind:level="level+1"
    ></Row>
  </template>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { IDataItem } from '@/types/index.d';
import Cell from './Cell.vue';

@Options({
  props: {
    item: Object as () => IDataItem,
    level: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Cell,
    // eslint-disable-next-line
    Row,
  },
})
class Row extends Vue {
  public item!: IDataItem;

  public level!: number;

  public opened = false;

  public get hasChild(): boolean {
    return this.item.children?.length > 0;
  }

  public toogleChild() {
    this.opened = !this.opened;
  }
}

export default Row;
</script>

<style lang="scss" scoped>
.row {
  border-bottom: 1px solid black;
  padding: 12px 20px;
  text-align: left;
  display: grid;
  grid-template-columns: 40% 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>
