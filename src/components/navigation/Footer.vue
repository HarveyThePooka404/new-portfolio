<template>
     <div class="footer">
         <p>I am the footer</p>
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
    
@Component({})
export default class Footer extends Vue {

}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;

     .footer {
        position: absolute;
        bottom: 0;
     }
</style>