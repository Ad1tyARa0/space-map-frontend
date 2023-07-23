<script setup lang="ts">
import type { SatelliteType } from '../utils/types/satellites';
import CustomField from '../common/CustomField.vue';

defineProps<{
    satellite: SatelliteType;
}>()
</script>

<template>
  <div class="item">
    <div class="name">
      <CustomField label="name" :value="satellite.name" />
    </div>

    <div class="norad-cat-id">
      <CustomField label="Norad Cat ID" :value="satellite.noradCatId" />
    </div>
    
    <img class="image" :src="satellite.imageUrl" />

    <div class="decay-date">
      <CustomField label="Decay Date" :value="satellite.decayDate" />
    </div>

    <div class="intl-des">
      <CustomField label="Intl Des" :value="satellite.intlDes" />
    </div>
    
    <div class="launch-date">
      <CustomField label="Launch Date" :value="satellite.launchDate" />
    </div>

    <div class="country-code">
      <CustomField label="Country Code" :value="satellite.countryCode" />
    </div>

    <div class="object-type">
      <CustomField label="Object Type" :value="satellite.objectType" />
    </div>

    <div class="orbit-code">
      <CustomField label="Orbit Code" :value="satellite.orbitCode" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "src/sass/colors";
@import "src/sass/variables";

.item {
  /* @include background1; */
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  display: grid;
  grid-template-areas: 
  'norad-cat-id name'
  'image image'
  'launch-date object-type'
  'intl-des country-code'
  'decay-date orbit-code'
  ;
}

.image {
  width: 100%;
  grid-area: image;
  margin: 0 auto 10px auto;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.name {
  grid-area: name;
  margin-bottom: 5px;
}

.norad-cat-id {
  grid-area: norad-cat-id;
  margin-bottom: 5px;
}

.decay-date {
  grid-area: decay-date;
}
.intl-des {
  grid-area: intl-des;
  margin-bottom: 5px;
}
.launch-date {
  grid-area: launch-date;
  margin-bottom: 5px;
}
.object-type {
  grid-area: object-type;
  margin-bottom: 5px;
}
.orbit-code {
  grid-area: orbit-code;
}

.country-code {
  grid-area: country-code;
  margin-bottom: 5px;
}

@media screen and (orientation: landscape) and (max-width: 2960px) {
  .image {
    max-width: 460px;
  }
}

@media screen and (orientation: landscape) and (max-width: 2465px) {
  .image {
    max-width: 565px;
  }
}

@media screen and (orientation: landscape) and (max-width: 1990px) {
  .image {
    max-width: 595px;
  }
}

@media screen and (orientation: landscape) and (max-width: 1450px) {
  .image {
    max-width: 650px;
  }
}

@media screen and (orientation: landscape) and (max-width: 920px) {
  .image {
    max-width: 650px;
  }
}

</style>