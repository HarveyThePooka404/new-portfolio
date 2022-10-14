<template>
     <div v-if="hobby" class="hobby-container">
        <div class="hobby-title">
            <h1>{{hobby.name}}</h1>
        </div>
        <div class="hobby-content">
            <h3> What is it? </h3>
            <p> {{hobby.definition}} </p>

            <h3> What do I love about it? </h3>
            <p> {{hobby.enjoy}} </p>

            <h3> Any recommendations? </h3>
            <p v-html="hobby.recommendations" /> 
        </div>
     </div>
</template>
    
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class HobbyContainer extends Vue {
    @Prop() hobby!: any
}
</script>

<style lang='scss' scoped>
     @use '@/assets/stylesheet.scss' as stylesheet;

    .hobby-container {
        background-color: #253345;
        border: solid 1px #253345;
        border-radius: 20px;
        padding: 2em;
        position: relative;
     }

     .hobby-title {
        text-align: left;
        color: stylesheet.$highlight-blue;
     }

     .hobby-content {
        text-align: left;
     }
</style>