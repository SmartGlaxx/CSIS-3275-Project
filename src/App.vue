<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useAppStore } from "./stores/appStore.js"

const handleStore = useAppStore()

</script>

<template>
  <main>
  <header>
    <div class="desktop-nav" >
      <ul >
        <li class="title1" style="font-size: 2rem">Quick Resume</li>
        <li><RouterLink to="/" class="link">Home</RouterLink></li>
        <li><RouterLink to="/about" class="link">Create Resume</RouterLink></li>
        <li><RouterLink to="/about" class="link">Resume Samples</RouterLink></li>
        <li><RouterLink to="/about" class="link">FAQ</RouterLink></li>
        <li><RouterLink to="/about" class="link">Contact Us</RouterLink></li>
      </ul>
    </div>
    <div class="mobile-nav">
      <div class="title2">Quick Resume</div>
      <button v-if="!handleStore.menubar" class="menu-btn" @click="handleStore.setMenubar">
        <font-awesome-icon icon="fa-solid fa-bars" style="font-size:2rem" />
      </button>
      <ul v-if="handleStore.menubar">
        <button class="menu-btn" @click="handleStore.setMenubar">
          <font-awesome-icon icon="fa-solid fa-xmark" style="font-size:2rem" />
        </button>
        <li><RouterLink to="/" class="link">Home</RouterLink></li>
        <li><RouterLink to="/about" class="link">Create Resume</RouterLink></li>
        <li><RouterLink to="/about" class="link">Resume Samples</RouterLink></li>
        <li><RouterLink to="/about" class="link">FAQ</RouterLink></li>
        <li><RouterLink to="/about" class="link">Contact Us</RouterLink></li>
      </ul>
    </div>
    <nav class="mobile">

    </nav>
  </header>
  <RouterView />
</main>
</template>

<style scoped>
main{
  width: 100%;
  padding: 0;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #ddd;
}

.desktop-nav{
  display: none;
}
.mobile-nav{
  display: flex;
  height: 6rem;
  background: black;
  height: auto;
  align-items: center;
  justify-content: space-between;
}
.desktop-nav ul{
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: auto 0;
  
}
.mobile-nav li{
  list-style-type: none;
  margin: 0 1rem;
  padding: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  
}
.mobile-nav li:hover{
  color: #203a43;
}
.menu-btn{
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  z-index: 2;
  padding: 0.2rem;
  width: 3rem;
  border-radius: 0.4rem;
  box-sizing: border-box;
  color: #444
}
.title2{
  list-style-type: none;
  margin: 0 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  color: #ddd;
  font-size: 2rem;
  cursor: pointer;
}
.title:hover{
  color: #203a43
}

@media screen and (min-width: 768px){
main{
  width: 100%;
  padding:0;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #ddd;
}
.desktop-nav{
  height: auto;
  background: black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.desktop-nav ul{
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: auto 0;
}
.desktop-nav li{
  list-style-type: none;
  margin: 0 1rem;
  padding: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.desktop-nav li:hover{
  color: #203a43;
}
.link{
  color: #ddd;
  text-decoration: none;

}
.link:hover{
  color: #203a43;
}
.title1{
  list-style-type: none;
  margin: 0 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  color: #ddd;
  font-size: 2rem;
  cursor: pointer;
 
}
.title:hover{
  color: #203a43
}
.mobile-nav{
  display: none;
}
}
</style>
