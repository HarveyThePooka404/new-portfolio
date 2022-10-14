<template>
<PageLayout title="My Portfolio" :headerContent="headerContent">
    <div v-for="project in portfolio" :key="project.name">
    <PortfolioProject :project="project"/>
    </div>
</PageLayout>
</template>
    
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import PageLayout from "@/components/layout/PageLayout.vue";
import PortfolioProject from "@/components/portfolio/PortfolioProject.vue"

import portfolio from "../assets/portfolio.json"

@Component({
    components: {
        PageLayout,
        PortfolioProject
    }})
export default class PortfolioView extends Vue {
    headerContent = "My Portfolio aims at showing you what kind of developer I am. Through personal projects (small and big), you should be able to find a project in your Framework of interest, favorite topic, or just for fun. It won't include my professional projects and other (secret) code. "
    portfolio = portfolio 

}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;
</style>