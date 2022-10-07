<template>
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>

    <ul> 
        <li v-for="link in links" :key="link.name"><router-link :to="link.link">{{link.name}}</router-link></li>
    </ul>
  </div>
</template>
    
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
    
@Component({})
export default class BurgerMenu extends Vue {
    @Prop() links!: any
}
</script>
    
<style lang='scss' scoped>
     @use '@/assets/stylesheet.scss' as stylesheet;

#menuToggle {
        z-index: 1;
        position: relative;
        margin-top: 9px;

        input {
            height: 30px;
            width: 50px;
            z-index: 2;
            position: absolute;
            top: -5px;
            left: -12px;
            opacity: 0;

            &:hover {
                cursor: pointer
            }
        }

        ul {
            opacity: 0;
            display: none;
        }
}

#menuToggle span {
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: white;
  border-radius: 3px;
  
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle input:checked ~ ul {
    display: block;
    position: fixed;
    left: 0;
    top: 10vh;
    width: 100vw;
    height: 20px;
    list-style: none;
    padding: 0;
    opacity: 1;

    li {
        border-top: solid 1px stylesheet.$highlight-blue;
        border-bottom: solid 1px stylesheet.$highlight-blue;
        background-color: stylesheet.$background-color;
        padding: 1em;

        transform: translate(-2000px);
        
        &:nth-child(1) {
            animation: slideIn 0.2s ease forwards;
        }
        &:nth-child(2) {
            animation: slideIn 0.2s 0.2s ease forwards;
        }

        &:nth-child(3) {
            animation: slideIn 0.2s 0.3s ease forwards;
        }

        &:hover {
            background-color: stylesheet.$highlight-blue;
            cursor: pointer;

            a, a:visited {
                color: stylesheet.$background-color;
            }
        }

        a {
            text-decoration: none;
            &:visited {
                color: white;
            }
        }
    }

}

#menuToggle input:checked ~ span
{
  opacity: 1;
  
  &:nth-child(2) {
    transform: rotate(45deg) translate(-1px, -2px) scale(1.2);
    }
  &:nth-child(3) {
    opacity: 0;
    }
  &:nth-child(4) {
    transform: rotate(-45deg) translate(-2px, -1px) scale(1.2);
  }
}

@keyframes slideIn {
    from {
        transform: translateX(-400px)
    } to {
        transform: translateX(0px);
    }
    
}

</style>