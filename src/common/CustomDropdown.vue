<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps<{
  options: Array<string>;
  selectedOption: string;
  dropdownLabel?: string;
  dropdownValue: string;
  showNoneSelected?: boolean
}>();


interface stateInterface {
  value: string;
}

const state = reactive<stateInterface>({
  value: props.selectedOption
})

defineEmits(['set-value'])

</script>

<template>
  <div class="custom-dropdown">
    <label v-if="dropdownLabel" class="label" :for="dropdownValue">{{ dropdownLabel }}</label>

    <select class="select" :name="dropdownValue" :id="dropdownValue" v-model="state.value" v-bind="$emit('set-value', state.value)">
      <option v-if="showNoneSelected" class="option" :selected="showNoneSelected" value>none selected</option>
      <option class="option" v-for="(option) in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>


<style lang="scss" scoped>
@import "src/sass/colors";
@import "src/sass/variables";

.custom-dropdown {
  @include background1;

  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  border-radius: 5px;
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }
}

.label {
  margin-bottom: 5px;
  font-family: 'Grandis Bold';
  font-size: 12px;
  margin-left: 4px;
}

.select {
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;


  &::-webkit-scrollbar {
  width: 0.7em;
  } 
 
  &::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    background-color: $background1;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: $action-background;
    border-radius: 2px;
  }
}

.option {
  background-color: $background1;
  color: white;
}
</style>