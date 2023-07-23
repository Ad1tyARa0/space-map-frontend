<script setup lang="ts">
import { Icon } from '@iconify/vue';

// Components.
import SatelliteItem from './SatelliteItem.vue';
import CustomDropdown from '@/common/CustomDropdown.vue';

// Types.
import type { SatellitePaginatedType } from '../utils/types/satellites';

defineProps<{
  payload: SatellitePaginatedType;
  currentPage: number;
  limit: number;
}>()

const emit = defineEmits(["next-page", "change-limit"]);

const handleChangeNumberOfRows = (payload: string) => {
  emit('change-limit', payload)
}

</script>

<template>
  <div class="root">
    <custom-scrollbar :auto-hide="true" :style="{ height: '70vh' }" class="scrollbar">
      <div class="list-container">
        <SatelliteItem v-for="(satellite, index) in payload.satellites" :satellite="satellite" :key="index" />
      </div>
    </custom-scrollbar>
    
    <div class="list-actions">
      <p class="total">
        (<span class="total-text">
          <CustomDropdown class="dropdown" dropdown-value="limit" :options="['10', '15', '20', '25', '30', '50', '100']" :selected-option="limit.toString()" :showNoneSelected="false" @set-value="handleChangeNumberOfRows" />
        </span> / <span class="total-text"> {{ payload.total }} </span>)
      </p>
      
      <p class="current-page">{{ currentPage }} / {{  payload.totalPages  }}</p>
      
      <div class="list-button" @click="$emit('prev-page')">
        <span class="button-text">
          Previous Page
        </span>
        <Icon icon="ph:arrow-left-bold" width="16" class="button-icon"/>
      </div>


      <button class="list-button" @click="$emit('next-page')">
        <span class="button-text">
          Next Page
        </span>
        <Icon icon="ph:arrow-right-bold" width="16" class="button-icon"/>
      </button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "src/sass/colors";
@import "src/sass/variables";

.root {
  @include background1;

  /* margin: 20px; */
  padding: 10px;
  border-radius: 15px;
}

.list-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.4rem;
  overflow: hidden;
  padding: 20px 0;
}

.list-actions {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .list-button {
    @include button1;
    @include box-shadow;
    
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 17px;


    .button-text {
      /* font-size: 18px;  */
      border-right: 1px solid white;
      padding-right: 10px;
    }

    .button-icon {
      margin: 0 3px 0 10px;
    }
  }


  .current-page {
    font-family: 'Grandis Bold';
    /* font-size: 22px; */
    color: white;
    margin-right: 10px;
    text-align: start;
  }

  .dropdown {
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    width: min-content;
    border: none;
  }

  .total-text {
    margin: 0 5px;
  }
  
  .total {
    /* font-family: 'Grandis Bold'; */
    flex: 1;
    color: white;
    display: flex;
  }
}


@media screen and (orientation: landscape) and (max-width: 4000px) {
  .list-container {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media screen and (orientation: landscape) and (max-width: 2960px) {
  .list-container {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media screen and (orientation: landscape) and (max-width: 2465px) {
  .list-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (orientation: landscape) and (max-width: 1990px) {
  .list-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (orientation: landscape) and (max-width: 1450px) {
  .list-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (orientation: portrait) and (max-width: 700px) {
  .current-page {
    display: none;
  }

  .list-button {
    font-size: 12px;
    
    &:first-of-type {
      margin-left: 10px;
    }
    
    &:last-of-type {
      margin-right: 0;
    }
  }
}

</style>