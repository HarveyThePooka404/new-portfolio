<template>
     <div class="resume-grid">
         <Container class="header-resume"> Ironically, I am not a big fan of résumés. I think it's a hard exercise of data visualisation, where you can't really win - but you can actually lose. If you are more old-school, you can find here a PDF-version of my résumé. Otherwise, let's embark on a longer trip.</Container>
         <div class="left-menu-resume">
         <ul>
            <li> philosophy </li>
            <li> Hr </li>
            <li> Software development </li>
         </ul>
         </div>

         <p class="content"> some content for one of the things on the left </p>
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Container from "../components/layout/Container.vue"
    
@Component({
    components: {
        Container, 
    }
})
export default class ResumeView extends Vue {

}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;

     .resume-grid {
        display: grid;
        grid-template-areas: 
            "title title"
            "left content"
            "left content"
     }

     .header-resume {
        grid-area: title;
        margin-left: 5vw;
        margin-right: 5vw;
        max-width: 950px;
        justify-self: center;
        font-size: .8rem;
     }

     .left-menu-resume {
        grid-area: left;
     }

     .content {
        grid-area: content;
     }
</style>