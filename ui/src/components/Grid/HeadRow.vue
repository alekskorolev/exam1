<template>
  <tr class="row">
    <Cell v-bind:isHead="true" value="Категория"></Cell>
    <Cell
      v-for="icon in icons"
      v-bind:isHead="true"
      v-bind:key="icon"
    >
      <HeadIcon
        v-bind:icon="icon"
        v-bind:state="sortState(icon)"
        v-on:click.prevent="setSort(icon)"
      ></HeadIcon>
    </Cell>
  </tr>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ISortOptions } from '@/types/index.d';
import { Icons, States } from './constants';
import Cell from './Cell.vue';
import HeadIcon from './HeadIcon.vue';

@Options({
  props: {
    store: Object,
  },
  components: {
    Cell,
    HeadIcon,
  },
})
export default class HeadRow extends Vue {
  public store!: ISortOptions

  public icons = Object.values(Icons)

  public sortState(fieldName: string) {
    const { field, order } = this.$store.state.sort;
    return field === fieldName ? order : States.empty;
  }

  public setSort(field: string) {
    console.log(this.$store.getters.sorted);
    this.$store.commit('toogleSort', field);
  }
}
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
