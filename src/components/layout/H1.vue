<template>
<h1>
    {{title}}
</h1>
</template>
    
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
    
@Component({})
export default class H1 extends Vue {
    @Prop({default: "This is a title"}) title!: string
}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;

     h1 {
        font-family: stylesheet.$title-font;
        font-size: 3rem;
     }
</style>