<template>
<PageLayout title="My Portfolio">
    <div> Some content </div>
</PageLayout>
</template>
    
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import PageLayout from "@/components/layout/PageLayout.vue";

@Component({
    components: {
        PageLayout
    }})
export default class PortfolioView extends Vue {

}
</script>
    
<style lang='scss'>
     @use '@/assets/stylesheet.scss' as stylesheet;
</style>