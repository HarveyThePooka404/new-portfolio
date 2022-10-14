<template>
     <div class="experience-container" @click="showContent">
        <div class="experience-title">
            <div class="experience-title-wrapper">
            <h2> <span>{{experience.jobTitle}}</span></h2>
            <h2> @{{experience.company}} </h2>
                </div>
            <span> {{experience.timeRange}} </span>
        </div>
        <div v-show="collapsableOpen" class="collapsable-content">
        <p class="experienceContent">
            <span v-html="experience.experienceContent"></span>
        </p>    
        <div v-if="experience.techStack" class="techStack">
            <h3> Tech Stack </h3>
            <span>  {{experience.techStack}} </span>
        </div>
        </div>
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
    
@Component({})
export default class ExperienceBlock extends Vue {
    @Prop() experience!: Record<string, unknown>

    collapsableOpen = false;

    showContent() {
        this.collapsableOpen = !this.collapsableOpen
    }
}
</script>
    
<style lang='scss'>

/* It's not scoped, because I'm too lazy to make it work with SCSS right now. It will impact Degree Component */
     @use '@/assets/stylesheet.scss' as stylesheet;

     .experience-container {
        background-color: #253345;
        border: solid 1px #253345;
        border-radius: 20px;
        padding: 2em;
        position: relative;
        margin-top: 2em;
        width: 100%;
        &:hover {
            cursor: pointer;
            border: solid 1px stylesheet.$highlight-blue
        }
     }

     .experienceContent {
        color: #717786;
        text-align: justify;
     }
     
     .experience-title {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
     }

    @include stylesheet.devices(mobile) {

    .experienceContent {
        text-align: left;
    }

      .experience-title {
        flex-flow: column;
      }

      .experience-title {
        span {
            margin-top: 10px;
            margin-left: 0;
        }
      }
     }

     .experience-title-wrapper {
        h2 {
            margin: 0;
            padding: 0;
            text-align: left;

        }
        
        h2:nth-child(1) {
            margin-right: 10px;
        }

        display: flex;
        flex-wrap: wrap;
        justify-items: left;
        
     }

     .experience-title {
        h2 {
            span {
                margin-left: 0;
                color: stylesheet.$highlight-blue;
            }
        }
     }

     .techStack {
        display: flex;
        align-items: center;
        span {
            margin-left: 2em;
        }
     }
</style>