<template>
     <div class="page-layout">
        <div class="page-content">
        <div class="header-container">
         <h1> {{ title }} </h1>
         <Container class="header-resume"> {{headerContent}} </Container>
         <slot name="header-options" />
        </div>
        <div>
            <slot />
        </div>
        </div>
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import Container from "@/components/layout/Container.vue"

@Component({
    components: {
        Container
    }
})
export default class PageLayout extends Vue {
    @Prop({default: "..."}) title!: string
    @Prop({default: "..."}) headerContent!: string

}
</script>
    
<style lang='scss' scoped>
     @use '@/assets/stylesheet.scss' as stylesheet;

    .page-layout {
      scroll-behavior: smooth;
      display: flex; 
      flex-flow: column;
      align-items: center;      
      margin-bottom: 20px;
     }

     .page-content {
        max-width: 1050px;
      display: flex; 
      flex-flow: column;
      align-items: center;
     }

     .header-resume {
        margin-left: 5vw;
        margin-right: 5vw;
        max-width: 850px;
        justify-self: center;
        font-size: 1em;
        margin-bottom: 20px;
     }
</style>