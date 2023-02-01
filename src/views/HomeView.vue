<template>
  <PageLayout title="Hello, I am Sylvain" :headerContent="headerContent">
  </PageLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageLayout from "../components/layout/PageLayout.vue"

@Component({
  components: {
    PageLayout,
  }
})
export default class HomeView extends Vue {
  headerContent = "If you're here, you'd probably like to know more about me. We can probably get you started with a porftolio or a resume.We're still hard at work to provide you with more content soon."
}
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