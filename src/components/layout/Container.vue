<template>
     <div class="container">
        <p v-html="content" />
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
    
@Component({})
export default class Container extends Vue {
   @Prop() content!: string
}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;

     .container {
        background-color: #2E3039;
        padding: 1.5em;
        border-radius: 20px;
        font-family: stylesheet.$body-font;
        text-align: left;
        font-size: 1.2rem;

        p {
         padding: 0;
         margin: 0;
        }
     }

</style>