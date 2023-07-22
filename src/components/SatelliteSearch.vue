        
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { reactive } from 'vue';

interface StateInterface {
  input: string;
  error: boolean;
  errorMessage: string;
}

const state = reactive<StateInterface>({
  input: '',
  error: false,
  errorMessage: '',
});


const emit = defineEmits(['search-satellite']);

const handleClickSearchSatellite = () => {
  if (state.input.trim().length === 0) {
    state.errorMessage = 'Please enter a valid search term!';
    state.input = '';
    
    return;
  } else {
    state.errorMessage = '';
  }

  emit('search-satellite', state.input.trim().toLowerCase());
}

const handleClickClearFilters = () => {
  location.reload();
}

</script>

<template>
  <div class="root">
    <div class="card">
        <div>
          <p class="info">Satellite Finder</p>

          <div class="input-container">
            
            <input class="search-input" v-model="state.input" />

            <button class="button button1" @click="handleClickSearchSatellite">
                <Icon icon="ph:magnifying-glass-fill" color="#fff" width="30" />
            </button>


            <button class="button button2" @click="handleClickClearFilters">
                <Icon icon="ph:backspace-fill" color="#fff" width="30" />
            </button>
          </div>

          <p v-if="state.errorMessage.length !== 0" class="error-message">{{ state.errorMessage }}</p>
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

  padding: 15px 20px;
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
  @include display-center;
  @include box-shadow;

  padding: 10px;
  margin-right: 20px;
  border-radius: 5px;

  &:last-of-type {
    margin-right: 0;
  }
}

.button1 {
  @include button1;
}
.button2 {
  @include button;
}

.search-input {
  @include background1;

  width: 100%;
  padding: 10px;
  font-family: 'Grandis Bold';
  border-radius: 5px;
  font-size: 20px;
  margin-right: 20px;
}

.error-message {
  font-family: 'Grandis Bold';
  /* color: $action-background; */
  margin-top: 15px;
  text-align: end;
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