<template>
  <span class="icon" v-bind:class="[{ ascent: state === 1, descent: state === -1 }, icon]"></span>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Icons, States } from './constants';

@Options({
  props: {
    state: {
      type: Number,
      default: States.empty,
    },
    icon: String,
  },
  components: {},
})
export default class HeadIcon extends Vue {
  public state!: States;

  public icon!: Icons;
}
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-size: contain;
  position: relative;
  cursor: pointer;
  &.countView {
    background-image: url('@/assets/eyes.png');
  }
  &.countPlay {
    background-image: url('@/assets/play.png');
  }
  &.countSend {
    background-image: url('@/assets/paper-plane.png');
  }
  &.countOrder {
    background-image: url('@/assets/envelope-open-dollar.png');
  }
  &.countPay {
    background-image: url('@/assets/credit-card.png');
  }
  &.viewSend, &.viewPay {
    margin-left: 24px;
    &::before {
      display: block;
      content: '/';
      width: 24px;
      height: 18px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      text-align: right;
      left: -24px;
      position: relative;
      background-image: url('@/assets/eyes.png');
    }
  }
  &.viewSend {
      background-image: url('@/assets/paper-plane.png');
  }
  &.viewPay {
    background-image: url('@/assets/credit-card.png');
  }
  &:hover {
    opacity: 0.6;
  }
  &.ascent::after, &.descent::after {
    display: block;
    content: '';
    width: 18px;
    height: 18px;
    position: absolute;
    right: -18px;
    top: -3px;
  }
  &.ascent::after {
    background-image: url('@/assets/arrow-small-up.png');
  }
  &.descent::after {
    background-image: url('@/assets/arrow-small-down.png');
  }
}
</style>
