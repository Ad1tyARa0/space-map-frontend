        
<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="root">
    <div class="card">
        <div>
          <p class="info">Satellite Finder</p>

          <div class="input-container">
            <button class="button">
                <Icon icon="ph:magnifying-glass-bold" width="22" />
            </button>

            <input class="search-input"  />
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/sass/colors";
@import "src/sass/variables";

.root {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  @include background1;

  padding: 15px;
  border-radius: 10px;
}

.info {
  font-size: 1.8em;
  margin-bottom: 15px;
  text-align: end;
  font-family: 'Grandis Bold';
}

.input-container {
  display: flex;
}

.button {
  @include background1;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
      background: rgba( 236, 240, 241, 0.2);
  }
}

.search-input {
  @include background1;

  width: 100%;
  padding: 10px;
  margin-left: 20px;
  font-family: 'Grandis Bold';
  border-radius: 5px;
}

@media screen and (orientation: portrait) and (max-width: 1000px) {
  .root {
    display: block;
    margin: 0 20px;
    /* display: none; */
  }
}

@media screen and (orientation: landscape) and (min-width: 750px) {
  .info {
    display: none;  
  }
}
</style>