<script setup lang="ts">
import type { SatellitePaginatedType } from '@/types/satellites';
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import SatelliteSearch from '../components/SatelliteSearch.vue';
import SatelliteList from '../components/SatelliteList.vue';
import { ref } from 'vue'
import { Icon } from '@iconify/vue';
import CustomLoader from '../common/CustomLoader.vue';

interface QueryInterface {  
  getSatellites: SatellitePaginatedType;
  loading: boolean;
}

const QUERY = gql`
query Satellites ($limit: Int!, $offset: Int!)  {
  getSatellites (limit: $limit, offset: $offset) {
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
}

const state = ref<StateInterface>({
  limit: 10,
  offset: 0,
  currentPage: 1
})

const { result, loading, fetchMore, error, onResult } = useQuery<QueryInterface>(QUERY, state)

console.log(error);

const onClickGoToNextPage = () => {
  state.value.offset = state.value.offset + 1;
  state.value.currentPage = state.value.offset + 1;

  fetchMore({
    variables: {
      offset: state.value.offset,
      limit: state.value.limit,
    },

    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult

      return fetchMoreResult
    },
  });
};

const onClickGoToPreviousPage = () => {  
  if(state.value.offset === 0) {
    return;
  }

  state.value.currentPage = state.value.offset;
  state.value.offset = state.value.offset - 1;

  fetchMore({
    variables: {
      offset: state.value.offset,
      limit: state.value.limit,
    },

    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult

      return fetchMoreResult
    },
  });
};

</script>

<template>
  <main>
    <div> 
      <SatelliteSearch />

      <div v-if="loading" class="loading-container">
        <CustomLoader />
      </div>

      <div v-else class="list-view">
        <SatelliteList :payload="result?.getSatellites!" @next-page="onClickGoToNextPage" @prev-page="onClickGoToPreviousPage" :current-page="state.currentPage" :limit="state.limit"  />
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
@import "src/sass/colors";
@import "src/sass/variables";



.list-view {
  margin-top: 20px;
  padding: 0 20px;
}

.loading-container {
  position: absolute;
  top: 50%;
  left: 45%;
  right: 45%;
}
</style>

