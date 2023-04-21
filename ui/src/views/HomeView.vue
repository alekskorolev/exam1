<template>
  <div class="home">
    <Grid v-bind:table="items" v-bind:count="count"></Grid>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ComponentOptions } from 'vue';
import { useStore } from 'vuex';
import Grid from '../components/Grid/Grid.vue';
import { IDataItem } from '../types/index.d';

@Options({
  components: {
    Grid,
  },
})
export default class HomeView extends Vue {
  constructor(props: ComponentOptions) {
    const store = useStore();
    store.dispatch('loadData');
    super(props);
  }

  public get count(): number {
    return this.$store.state.count;
  }

  public get items(): Array<IDataItem> {
    return this.$store.state.items;
  }
}
</script>
