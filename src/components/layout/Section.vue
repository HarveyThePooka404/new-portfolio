<template>
     <section class="section-class">
          <slot />
     </section>
</template>
    
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
    
@Component({})
export default class Section extends Vue {

}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;

     .section-class {
          margin-left: 20vw;
          margin-right: 20vw;
          max-width: 800px;
     }
</style>