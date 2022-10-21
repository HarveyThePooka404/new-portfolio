<template>
     <div class="page-layout">
        <div class="page-content">
        <div class="header-container">
            <div class="title-container"> 
         <h1> {{ title }} </h1> <slot name="icons"/>
         </div>
         <Container class="header-resume" :content="headerContent" />
         <slot name="options" />
        </div>
        <div class="content">
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

    @include stylesheet.devices(mobile) {
        .page-layout {
            margin-left: 10px;
            margin-right: 10px;
        }
    }

    @include stylesheet.devices(tablet) {
        .page-layout {
            margin-left: 5vw;
            margin-right: 5vw;
        }
    }

     .page-content {
        max-width: 850px;
        display: flex; 
        flex-flow: column;
        align-items: center;
        position: relative;
        width: 100%;
     }

     .content {
        width: 100%;
     }

     .header-resume {
        max-width: 850px;
        justify-self: center;
        font-size: 1em;
        margin-bottom: 20px;
     }
     

     .title-container {
        display: flex;
        justify-content: center;
     }
</style>