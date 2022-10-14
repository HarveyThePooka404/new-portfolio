<template>
     <div class="experience-container" @click="showContent">
        <div class="experience-title">
            <div class="experience-title-wrapper">
            <h2> <span>{{degree.degreeTitle}}</span></h2>
            <h2> @{{degree.school}} </h2>
                </div>
            <span> {{degree.timeRange}} </span>
        </div>
        <div v-show="collapsableOpen" class="collapsable-content">
        <p class="experienceContent">
        <span v-html="degree.experienceContent"></span>
        </p>
        </div>
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
    
@Component({})
export default class DegreeBlock extends Vue {
        @Prop() degree!: Record<string, unknown>

        collapsableOpen = false;

    showContent() {
        this.collapsableOpen = !this.collapsableOpen
    }
}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;
</style>