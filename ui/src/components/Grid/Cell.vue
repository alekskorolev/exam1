<template>
  <component
    class="cell"
    v-bind:style="{ paddingLeft: (level * 30 + 30) + 'px'}"
    v-bind:is="isHead ? 'th' : 'td'"
  >
    <div class="content">
      <slot></slot>
      <span v-if="value !== undefined">{{ value }}</span>
    </div>
  </component>
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
    isHead: {
      type: Boolean,
      default: false,
    },
  },
})
export default class Cell extends Vue {
  public value!: string|number;

  public level!: number;

  public isHead!: boolean;
}
</script>

<style lang="scss" scoped>
.cell {
  .content {
    position: relative;
  }
}
</style>
