        
<script setup lang="ts">
import { reactive } from 'vue';
import { Icon } from '@iconify/vue';

// Components.
import CustomDropdown from '../common/CustomDropdown.vue';

// Constants.
import { COUNTRY_CODES } from '../constants/country-codes';
import { ORBIT_CODES } from '../constants/orbit-code';
import { OBJECT_TYPE } from '@/constants/object-type';

const props = defineProps<{
  nameOrId: string;
  countryCode: string;
  objectType: string;
  orbitCode: string;
}>();

interface StateInterface {
  input: string;
  error: boolean;
  errorMessage: string;
}

const state = reactive<StateInterface>({
  input: props.nameOrId,
  error: false,
  errorMessage: '',
});

const emit = defineEmits(['search-satellite', 'change-country-code', 'change-orbit-code', 'change-object-type']);

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


const handleChangeCountryCodes = (payload: string) => {
  emit('change-country-code', payload);
}

const handleChangeOrbitCodes = (payload: string) => {
  emit('change-orbit-code', payload);
}

const handleChangeObjectType = (payload: string) => {
  emit('change-object-type', payload)
}
</script>

<template>
  <div class="root">
    <div class="card">
        <div>
          <p class="info">Space Navigator</p>

          <div class="input-container">
            <button class="button button1" @click="handleClickSearchSatellite">
                <Icon icon="ph:magnifying-glass-fill" color="#fff" width="20" />
            </button>
            
            <input class="search-input" v-model="state.input" placeholder="Enter Search Term OR Norad Cat ID"/>

            <button class="button button2" @click="handleClickClearFilters">
                <Icon icon="ph:backspace-fill" color="#fff" width="20" />
            </button>
          </div>

          
          <div class="dropdown-container">
            <CustomDropdown class="dropdown" :options="COUNTRY_CODES" dropdown-label="Country Code" dropdown-value="country-code" :selected-option="countryCode" @set-value="handleChangeCountryCodes" />
            
            <CustomDropdown class="dropdown" :options="ORBIT_CODES" dropdown-label="Orbit Code" dropdown-value="orbit-code" :selected-option="orbitCode" @set-value="handleChangeOrbitCodes" />
            
            <CustomDropdown class="dropdown" :options="OBJECT_TYPE" dropdown-label="Object Type" dropdown-value="object-type" :selected-option="objectType" @set-value="handleChangeObjectType" />
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

  padding: 10px;
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
  margin-bottom: 10px;
}

.button {
  @include display-center;
  @include box-shadow;

  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;

  &:last-of-type {
    margin-right: 0;
  }
}

.button-hidden { 
  display: none;
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
  padding: 5px 10px;
  font-family: 'Grandis Bold';
  border-radius: 5px;
  margin-right: 10px;

  &::placeholder {
    font-size: 14px;
    color: rgba($color: #000000, $alpha: 0.4);
  }
}
.error-message {
  font-family: 'Grandis Bold';
  margin-top: 15px;
  text-align: end;
}

.dropdown-container {
  display: flex;
}

@media screen and (orientation: portrait) and (max-width: 1000px) {
  .root {
    display: block;
    margin: 0 10px;
    /* display: none; */
  }
  .button-hidden { 
    display: flex; 
  }

  .dropdown {
    flex: 1;
  }

  .dropdown-container {
    display: flex;
    padding: 5px 0;
  }
}

@media screen and (orientation: portrait) and (max-width: 700px) {  
  .card {
    padding: 5px 15px;
  }

  .info {
    margin-bottom: 5px;
  }

  .input-container {
    margin-bottom: 5px;
  }
}

@media screen and (orientation: landscape) and (min-width: 750px) {
  .info {
    display: none;  
  }
}


</style>