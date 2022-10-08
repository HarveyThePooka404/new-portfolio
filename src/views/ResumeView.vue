<template>
     <div class="resume-grid">
      <div class="resume-container">
         <h1 id="top"> My Resume </h1>
         <Container class="header-resume"> Ironically, I am not a big fan of résumés. I think it's a hard exercise of data visualisation, where you can't really win - but you can actually lose. If you are not ready for my complete life story, you can find here a PDF-version of my résumé. Otherwise, let me tell you my story.</Container>
         <ul>
            <li> <a href="#philosophy"> Philosophy </a></li>
            <li> <a href="#Human Resources"> Human Resources </a></li>
            <li> <a href="#Software Development"> Software Developer </a></li>
         </ul>

<!--Dynamic Content  -->

      <div v-for="data in resume" :key="data[0]" >
      <h1 :id="data.name"> {{data.name}} </h1>
         <div class="flex">
      <p> {{data.exerpt}}</p>
         <ExperienceBlock v-for="experience in data.experiences" :key="experience.jobTitle" :experience="experience"/>
         <DegreeBlock :degree="data.degree"/>
         </div>
      </div>

<!--Dynamic Content  -->

<div class="top-button"> <a href="#top" class="chevron-wrapper"> <span class="chevron"/></a></div>
      </div>
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import Container from "../components/layout/Container.vue";
import ExperienceBlock from "../components/resume/ExperienceBlock.vue";
import DegreeBlock from "../components/resume/DegreeBlock.vue"

import resume from "../assets/resume.json";
    
@Component({
    components: {
        Container, 
        ExperienceBlock,
        DegreeBlock
    }
})
export default class ResumeView extends Vue {
   resume = resume
}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;

     .resume-grid {
      display: flex; 
      flex-flow: column;
      align-items: center;      
     }

     .top-button {
      a:visited {
         color: white;
      }
      position: absolute;
      right: 50px;
      top: 85vh;
     }

     .chevron-wrapper {
      position: fixed;
     }

     @include stylesheet.devices(mobile) {
      .top-button {
         right: 20px;
      }
     }

     .chevron::before {
   border-style: solid;
	border-width: 0.4em 0.4em 0 0;
	content: '';
	display: inline-block;
	height: 1em;
	left: 0.15em;
	position: relative;
	top: 0.15em;
	transform: rotate(-45deg);
	vertical-align: top;
	width: 1em;
     }

     .flex {
      display: flex;
      flex-flow: column;
      align-items: center;
      align-self: center;
      margin-left: 5vw;
      margin-right: 5vw;
     }

     .resume-container {
      max-width: 1050px;
      display: flex; 
      flex-flow: column;
      align-items: center;
      position: absolute;
     }


     .header-resume {
        margin-left: 5vw;
        margin-right: 5vw;
        max-width: 850px;
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