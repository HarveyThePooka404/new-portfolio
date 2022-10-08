<template>
     <div class="experience-container">
        <div class="experience-title">
            <div class="experience-title-wrapper">
            <h2> <span>{{degree.degreeTitle}}</span></h2>
            <h2> @{{degree.school}} </h2>
                </div>
            <span> {{degree.timeRange}} </span>
        </div>
        <p class="experienceContent">
        <span v-html="degree.experienceContent"></span>
        </p>
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
    
@Component({})
export default class DegreeBlock extends Vue {
        @Prop() degree!: Record<string, unknown>

}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;
</style>