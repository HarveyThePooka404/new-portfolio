<template>
  <router-link :to="link"> {{ name }} </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class NavBarItem extends Vue {
  @Prop({ default: "Hello" }) name!: string;
  @Prop({ default: "/" }) link!: string;
}
</script>
