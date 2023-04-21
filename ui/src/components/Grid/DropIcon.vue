<template>
  <span class="icon" v-bind:class="{ opened }"></span>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
})
export default class DropIcon extends Vue {
  public opened!: boolean;
}
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-size: contain;
  background-image: url('@/assets/angle-right.png');
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  &.opened {
    background-image: url('@/assets/angle-down.png');
  }
}
</style>
