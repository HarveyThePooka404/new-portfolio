<template>
   <div class="about-grid">
    <div class="about-container">
     <h1> About Me </h1>
     <Container> You probably expected to find a wall of text. I've tried to do things a bit differently, and it's about you asking questions. </Container>
     <Multiselect v-model="value" :options="options" class="multiselect" placeholder="Curious about a hobby?"/>

     <hobby-container :hobby="hobbies[value]"/>
   </div>
   
   </div>

</template>
  
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Container from "@/components/layout/Container.vue";
import HobbyContainer from "@/components/about/HobbyContainer.vue";

//https://vue-multiselect.js.org/
import Multiselect from 'vue-multiselect'
  
//data
import hobbies from "@/assets/hobbies.json"

@Component({
  components: {
    Container, 
    Multiselect, 
    HobbyContainer
  }
})
export default class AboutView extends Vue {

  value = null
  hobbies = hobbies;

  options: string[] = Object.keys(hobbies);
} 
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang='scss' scoped>
   @use '@/assets/stylesheet.scss' as stylesheet;

   @include stylesheet.devices(mobile) {
    .about-grid {
      margin: 0 2em;
    }
   }

      @include stylesheet.devices(tablet) {
    .about-grid {
      margin: 0 2em;
    }
   }

   .multiselect {
    margin: 2em 0;
   }
   .about-grid {
    display: flex;
    flex-flow: column;
    place-items: center;
   }

   .about-container {
    max-width: 850px;
    display: flex;
    flex-flow: column;
   }
</style>