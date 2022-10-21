<template>
     <div class="project-container">
         <h2> {{project.name}} </h2>
         <div class="project-content">
            <p> {{project.description}}  </p>
            </div>

            <div class="detail-container">
                <h3 class="detail-title"> Details </h3>
                <div v-for="detail in Object.entries(project.details)" :key="detail[0]">
                    <div class="detail">
                        <span> {{detail[0]}} </span> <p v-html="detail[1]" />
                    </div>
                </div>
            </div>
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
    
@Component({})
export default class PortfolioProject extends Vue {
    @Prop() project!: any
}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;

     .project-container {
        margin-top: 20px;
        background-color: stylesheet.$container-color;
        border-radius: 20px;
        padding: 1em;
        padding-bottom: 2em;
        text-align: left;

        h2 {
            padding: 0;
            margin: 0;
            color: stylesheet.$highlight-blue
        }
     }

     .project-content {
        column-count: 2;
        column-gap: 6%;
        text-align: justify;
        text-justify: auto;
        place-items: center;
        padding-top: .5rem;
        
        * {
            padding: 0;
            margin: 0;
        }
     }

     .detail-title {
        color: stylesheet.$highlight-blue;
        margin-bottom: 5px;
     }

     .detail {
        padding-top: .5em;
        display: flex;
        span {
            font-weight: bold;
            min-width: 15%;
        }

        :nth-child(2) {
            padding: 0;
            margin: 0 0 0 20px;
        }

        a, a:visited {
            color: white;
        }
     }



</style>