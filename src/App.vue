<script setup lang="ts">
import {  RouterView } from 'vue-router';

</script>

<template>
  <header class="header">
    <h1 class="header-title">Satellite Finder</h1>
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
    <div class="circle5"></div>
  </header>


  <RouterView />

  <ModalsContainer />
</template>

<style scoped>
.header {
  user-select: none;

  .header-title {
    font-size: 3.4em;
    font-family: 'Grandis Bold';
    position: absolute;
    right: 1%;
    color: white
  }
}

.circle1,
.circle2, .circle4, .circle5 {
  background: white;
  background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.1)
  );
  height: 5rem;
  width: 5rem;
  position: absolute;
  border-radius: 50%;
}

.circle3, .circle4 {
  background: white;
  background: linear-gradient(81deg, rgba(155,89,182,0.9) 0%, rgba(255,255,255, 0.1) 100%);

  height: 15rem;
  width: 15rem;
  position: absolute;
  border-radius: 50%;
}

.circle5 {
  background: white;
  background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.1)
  );
  height: 10rem;
  width: 10rem;
  position: absolute;
  border-radius: 50%;
}

.circle1 {
  top: 5%;
  left: 35%;
  transform: translate(-10%, -10%);
}

.circle2 {
  top: 70%;
  left: 80%;
  transform: translate(-50%, -50%);
}

.circle3 {
  top: 60%;
  left: 30%;
  transform: translate(-50%, -50%);
}

.circle4 {
  top: 70%;
  left: 70%;
  transform: translate(-50%, -50%);
}

.circle5 {
  top: 15%;
  left: 10%;
  transform: translate(-50%, -50%);
}

@media screen and (orientation: portrait) and (max-width: 1080px) {
  .header-title {
    display: none;
  }
}
</style>
