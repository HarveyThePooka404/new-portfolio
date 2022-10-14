<template>
<PageLayout title="About Me" :headerContent="headerContent">
     <Multiselect v-model="value" :options="options" class="multiselect" placeholder="Curious about a hobby?"/>
     <hobby-container :hobby="hobbies[value]"/>
</PageLayout>
</template>
  
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import HobbyContainer from "@/components/about/HobbyContainer.vue";
import PageLayout from "@/components/layout/PageLayout.vue"

//https://vue-multiselect.js.org/
import Multiselect from 'vue-multiselect'
  
//data
import hobbies from "@/assets/hobbies.json"

@Component({
  components: {
    Multiselect, 
    HobbyContainer, 
    PageLayout
  }
})
export default class AboutView extends Vue {

  headerContent = "You probably expected to find a wall of text. I've tried to do things a bit differently, and it's about you asking questions."

  value = null
  hobbies = hobbies;

  options: string[] = Object.keys(hobbies);
} 
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang='scss' scoped>
   @use '@/assets/stylesheet.scss' as stylesheet;

     .multiselect {
      margin-bottom: 1em;
      min-width: 850px;
     }
     
   @include stylesheet.devices(mobile) {
    .about-grid {
      margin: 0 2em;
    }

    .multiselect {
      min-width: inherit;
    }
   }

      @include stylesheet.devices(tablet) {
    .about-grid {
      margin: 0 2em;
    }

    .multiselect {
      min-width: auto;
    }
   }

   .about-grid {
    display: flex;
    flex-flow: column;
    place-items: center;
   }

</style>