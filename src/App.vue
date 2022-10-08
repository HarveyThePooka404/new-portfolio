<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBar from "./components/navigation/NavBar.vue";

    console.log( "%cThe code for the website is shared in my portfolio! %o", "color: red ; font-size: 20px;", "go there!")

export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>


<style lang="scss">

@use "@/assets/stylesheet.scss" as stylesheet;

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.consumed {
  margin-bottom: 2em;
}

html {
  scroll-behavior: 'smooth';
}

body {
  font-family: stylesheet.$body-font;
  background-color:	stylesheet.$background-color;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
