<template>
     <div class="container">
        <slot />
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
    
@Component({})
export default class Container extends Vue {

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
     }

</style>