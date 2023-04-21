<template>
  <td class="cell">
    <div class="icon-slot" v-bind:style="{ width: (level * 30 + 30) + 'px'}"><slot></slot></div>
    <span>{{ value }}</span>
  </td>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    value: [String, Number],
    level: {
      type: Number,
      default: 0,
    },
  },
})
export default class Cell extends Vue {
  public value!: string|number;

  public level!: number;
}
</script>

<style lang="scss" scoped>
.cell {
  position: relative;
  .icon-slot {
    display: inline-block;
    left: -30px;
  }
}
</style>
