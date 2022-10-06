<template>
  <div>
    <NavBarItem v-for="link in links" :key="link.name" :name="link.name" :link="link.link"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBarItem from "./NavBarItem.vue";

@Component({
  components: {
    NavBarItem
  }
})
export default class NavBar extends Vue {
  links = [
    {
      name: "Home",
      link: "/",
    }, {
      name: "About", 
      link: "/about"
    }
  ];
}
</script>
