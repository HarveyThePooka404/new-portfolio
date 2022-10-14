<template>
<PageLayout title="My Resume" :headerContent="headerContent">
   <template v-slot:icons>
      <div class="icon-container">
         <a href="https://github.com/HarveyThePooka404" target="_blank" id="top"><img src="../../public/icons/github.png" /></a>
         <a href="https://www.linkedin.com/in/sylvainbuisson/" target="_blank"><img src="../../public/icons/linkedin.png" /></a>
      </div>
   </template>
      <template v-slot:options>
         <div class="button-container">
            <router-link to="#philosophy"><button> Philosophy</button></router-link>
            <router-link to="#human_resources"><button> Human Resources</button></router-link>
             <router-link to="#software_development"><button> Software Developer</button></router-link>
         </div>
      </template>

<!--Dynamic Content  -->
      <div v-for="data in resume" :key="data[0]" >
      <h1 :id="data.anchor"> {{data.name}} </h1>
         <div class="flex">
      <p class="data-exerpt"> {{data.exerpt}}</p>
         <ExperienceBlock v-for="experience in data.experiences" :key="experience.jobTitle" :experience="experience"/>
         <DegreeBlock :degree="data.degree"/>
         </div>
      </div>
<!--Dynamic Content  -->

<div class="top-button"> <router-link to="#top" class="chevron-wrapper"> <span class="chevron"/></router-link></div>
</PageLayout>
</template>
    
<script lang='ts' scoped>
import { Component, Vue } from 'vue-property-decorator';

import Container from "../components/layout/Container.vue";
import ExperienceBlock from "../components/resume/ExperienceBlock.vue";
import DegreeBlock from "../components/resume/DegreeBlock.vue";
import PageLayout from "@/components/layout/PageLayout.vue"

import resume from "../assets/resume.json";
    
@Component({
    components: {
        Container, 
        ExperienceBlock,
        DegreeBlock, 
        PageLayout
    }
})
export default class ResumeView extends Vue {
   resume = resume

   headerContent = "Ironically, I am not a big fan of résumés. I think it's a hard exercise of data visualisation, where you can't really win - but you can actually lose. If you are not ready for my complete life story, you can find here a PDF-version of my résumé. Otherwise, let me tell you my story. I've added quick navigation buttons to go to the relevant sections. You can learn more about an experience by clicking on it. "
}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;
     
     @include stylesheet.devices(mobile) {
      .top-button {
         right: 30px;
         top: 75vh;
      }

      .button-container {
         display:flex;
         flex-flow: column;
         
         a button {
            width: 80vw;
            margin-bottom: 1em;
         }
      }
     }

     .data-exerpt {
      text-align: justify;
     }

     .icon-container {
      display: flex;
      align-items: center;

      a:nth-child(1), a:nth-child(2) {
         margin-left: 15px;
      }

      img {
         max-height: 30px;
         max-width: 30px;
         cursor: pointer;
      }
     }

     .top-button {
      a:visited {
         color: white;
      }
      position: absolute;
      right: -50px;
      top: 85vh;
     }

     .chevron-wrapper {
      position: fixed;
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
     }

     .button-container {
      display: flex;
      justify-content: space-around;
      padding: 1.5em;

      button {
         background-color: #2E3039;
         border: none;
         padding: 1em;
         font-weight: bold;
         border-radius: 20px;
         border: solid 1px #2E3039;
      }

      a, a:visited {
         button {
            text-decoration: none;
            color: white;
         }
      }

      button:hover {
         cursor: pointer;
         border: solid 1px stylesheet.$highlight-blue;
      }
     }

     .footer {
      height: 40px;
     }
     
</style>