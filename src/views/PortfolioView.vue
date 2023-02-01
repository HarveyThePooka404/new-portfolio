<template>
    <PageLayout title="My Portfolio" :headerContent="headerContent">
        <Multiselect v-model="value" :options="options" class="multiselect-custom--width" :searchable=true
            placeholder="Filter out the projects" group-label="category" group-values="libs" :group-select="false" />
        <div v-for="project in filteredPortfolio" :key="project.name">
            <PortfolioProject :project="project" />
        </div>
    </PageLayout>
</template>
    
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import PageLayout from "@/components/layout/PageLayout.vue";
import PortfolioProject from "@/components/portfolio/PortfolioProject.vue";
import Container from "@/components/layout/Container.vue"

//Data
import portfolio from "../assets/portfolio.json"

//https://vue-multiselect.js.org/
import Multiselect from 'vue-multiselect'


@Component({
    components: {
        PageLayout,
        PortfolioProject,
        Container,
        Multiselect
    }
})
export default class PortfolioView extends Vue {
    headerContent = "My Portfolio aims at showing you what kind of developer I am. Through personal projects (small and big), you should be able to find a project in your Framework of interest, favorite topic, or just for fun. It won't include my professional projects and other (secret) code. "
    portfolio = portfolio

    value = null
    filteredPortfolio = this.returnFilteredContent();

    @Watch("value")
    onValueChange() {
        this.filteredPortfolio = this.returnFilteredContent()
    }

    returnFilteredContent() {

        let projects: any[] = [];

        if (this.value) {            
            Object.entries(portfolio).forEach((project) => {
                if (this.value && project[1].details['Tech Stack'].includes(this.value)) {
                    projects.push(project)
                } 
            })
        } else {
            projects = Object.entries(portfolio)
        }

        return projects
    }

    options = [{
        category: 'Framework',
        libs: [
            "Vue",
            "NextJS"
        ],
    },
    {
        category: 'Library',
        libs: [
            'TailwindUI',
            'Vanilla CSS / SCSS'
        ]
    }]
}
</script>

<style lang='scss'>
@use '@/assets/stylesheet.scss' as stylesheet;

.multiselect-custom--width {
    margin-bottom: 1em;
    min-width: 850px;
    width: auto;
}

@include stylesheet.devices(mobile) {
    .multiselect-custom--width {
        min-width: inherit;
    }
}

@include stylesheet.devices(tablet) {
    .multiselect-custom--width {
        min-width: auto;
    }
}
</style>