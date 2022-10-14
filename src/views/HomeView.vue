<template>
  <div class="home">
      <Container class="container-home">
        <p class="p-intro"> If you're here, you'd probably like to know more about me. We can probably get you started with a <router-link to="/portfolio">porftolio</router-link> or a <router-link to="/resume">resume</router-link>. We're still hard at work to provide you with more content soon.  </p>
      </Container>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Container from "../components/layout/Container.vue";

@Component({
  components: {
    Container
  }
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>

  @use '@/assets/stylesheet.scss' as stylesheet;

  .container-home {
    max-width: 500px;
  }

  .home {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .p-intro {
    font-family: stylesheet.$body-font;
    text-align: left;
    font-size: 1.2rem;
  a {
    &:visited {
      color: white;
    }
  }
  }
</style>