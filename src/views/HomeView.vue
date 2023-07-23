<script setup lang="ts">
import { ref } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

import CustomLoader from '../common/CustomLoader.vue';
import SatelliteList from '../components/SatelliteList.vue';
import SatelliteSearch from '../components/SatelliteSearch.vue';

// Types.
import type { SatellitePaginatedType } from '../utils/types/satellites';

interface QueryInterface {  
  getSatellites: SatellitePaginatedType;
  loading: boolean;
}

const QUERY = gql`
query Satellites ($limit: Int!, $offset: Int!, $nameOrId: String, $countryCode: String, $orbitCode: String, $objectType: String)  {
  getSatellites (limit: $limit, offset: $offset, nameOrId: $nameOrId, countryCode: $countryCode, orbitCode: $orbitCode, objectType: $objectType) {
   total,
   totalPages
    satellites {
      countryCode
      decayDate
      intlDes
      launchDate
      name
      noradCatId
      objectType
      orbitCode
      imageUrl
    }
    currentPage
  }
}`

interface StateInterface {
  limit: number;
  offset: number;
  currentPage: number;
  nameOrId: string;
  countryCode: string;
  orbitCode: string;
  objectType: string;
}

const state = ref<StateInterface>({
  limit: 10,
  offset: 0,
  currentPage: 1,
  nameOrId: '',
  countryCode: '',
  orbitCode: '',
  objectType: '',
})

const { result, loading, error } = useQuery<QueryInterface>(QUERY, state)

console.log(error);

const onClickGoToNextPage = () => {
  state.value.offset = state.value.offset + 1;
  state.value.currentPage = state.value.offset + 1;
};

const onClickGoToPreviousPage = () => {  
  if(state.value.offset === 0) {
    return;
  }

  state.value.currentPage = state.value.offset;
  state.value.offset = state.value.offset - 1;
};

const onClickSearchSatellite = (payload: string) => {
  state.value.nameOrId = payload;
}

const onClickChangeRowsPerPage = (payload: string) => {
  state.value.limit = Number(payload);
}

const onClickChangeCountryCodes = (payload: string) => {
  state.value.countryCode = payload;
}

const onClickChangeOrbitCodes = (payload: string) => {
  state.value.orbitCode = payload;
}

const onClickChangeObjectType = (payload: string) => {
  state.value.objectType = payload;
}

</script>

<template>
  <main class="main">
    <div> 
      <SatelliteSearch @search-satellite="onClickSearchSatellite" :name-or-id="state.nameOrId" :country-code="state.countryCode" :object-type="state.objectType" :orbit-code="state.orbitCode" @change-country-code="onClickChangeCountryCodes" @change-orbit-code="onClickChangeOrbitCodes" @change-object-type="onClickChangeObjectType" />

      <div v-if="loading" class="container">
        <CustomLoader />
      </div>

      <div v-else-if="result?.getSatellites.satellites.length === 0" class="container">    
        <h1 class="no-results">No Results to display</h1>
      </div>

      <div v-else class="list-view">
        <SatelliteList :payload="result?.getSatellites!" @next-page="onClickGoToNextPage" @prev-page="onClickGoToPreviousPage" :current-page="state.currentPage" :limit="state.limit" @change-limit="onClickChangeRowsPerPage"  />
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
@import "src/sass/colors";
@import "src/sass/variables";
.main {
  padding-top: 5px;
}

.list-view {
  margin-top: 10px;
  padding: 0 10px;
}

.container {
  @include display-center;
  
  height: calc(100vh - 140px);
}

.no-results {
  font-family: 'Grandis Bold';
  color: white;
}
</style>

