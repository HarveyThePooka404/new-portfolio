<template>
  <div class="nav-bar">
    <router-link to="/"><div class="home-icon underline-hover">Sylvain Buisson</div></router-link>
    
    <div class="item-container">
      <NavBarItem class="nav-bar-item body-font underline-hover" v-for="link in links" :key="link.name" :name="link.name" :link="link.link"/>
    </div>

    <BurgerMenu class="burger-menu" :links="links"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBarItem from "./NavBarItem.vue";
import BurgerMenu from "./BurgerMenu.vue";

@Component({
  components: {
    NavBarItem, 
    BurgerMenu
  }
})
export default class NavBar extends Vue {
  links = [
        {
      name: "Resume", 
      link: "/resume"
    },
     {
      name: "About", 
      link: "/about"
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
  ];
}
</script>

<style lang="scss" scoped>

@use "@/assets/stylesheet.scss" as stylesheet;


@include stylesheet.devices(mobile) {
  .item-container {
    display: none !important;
  }

  .burger-menu {
    display: grid !important;
  }

  .nav-bar {
    align-items: center !important;
    justify-content: space-between;
  }
}

.burger-menu {
  display: none;
}


a .home-icon {
  color: white;  
  font-size: 1.7rem;
  font-family: stylesheet.$title-font;
}

.nav-bar-item {
  color: #717786;
}

.nav-bar {
  display: flex;
  align-items: baseline;
  padding: 3em;

  .item-container {
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
    width: 50%;
    max-width: 400px;
  }

  a {
    font-size: 1.2rem;
    text-decoration: none;
    
    &:visited {
      color: #717786
    }

    &:hover {
      color: stylesheet.$highlight-blue;
    }
  }
}

</style>