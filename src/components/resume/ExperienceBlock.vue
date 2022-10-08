<template>
     <div class="experience-container">
        <div class="experience-title">
            <h2> <span>{{experience.jobTitle}}</span> @{{experience.company}} </h2>
            <span> {{experience.timeRange}} </span>
        </div>
        <p class="experienceContent">
            {{experience.experienceContent}}
        <div class="techStack">
            <h3> Tech Stack </h3>
            <span>  {{experience.techStack}} </span>
        </div>
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
    
@Component({})
export default class ExperienceBlock extends Vue {
    @Prop() experience!: Record<string, unknown>
}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;

     .experience-container {
        background-color: #253345;
        border-radius: 20px;
        padding: 2em;
        position: relative;
        margin-top: 2em;
     }

     .experienceContent {
        color: #717786;
        text-align: justify;
     }
     
     .experience-title {
        display: flex;
        align-items: baseline;
        span {
            margin-left: 2em;
        }
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