<script setup lang="ts">
import type { SatellitePaginatedType } from '@/types/satellites';
import SatelliteItem from './SatelliteItem.vue';
import { Icon } from '@iconify/vue';
defineProps<{
  payload: SatellitePaginatedType;
  currentPage: number;
  limit: number;
}>()


defineEmits(["next-page"]);

</script>

<template>
  <div class="root">
    <custom-scrollbar :style="{ height: '70vh' }" class="scrollbar">
      <div class="list-container">
        <SatelliteItem v-for="(satellite, index) in payload.satellites" :satellite="satellite" :key="index" />
      </div>
    </custom-scrollbar>
    
    <div class="list-actions">
      
      <p class="total">({{ limit }} / {{  payload.total  }})</p>
      
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
  padding: 15px;
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
    @include button;
    @include box-shadow;
    
    background-color: $action-background;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    /* min-width: 170px; */
    /* text-align: center; */
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
  
  .total {
    /* font-family: 'Grandis Bold'; */
    flex: 1;
    color: white;
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

</style>