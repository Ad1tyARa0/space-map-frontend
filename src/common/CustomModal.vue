<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
  title?: string
}>()

const emit = defineEmits<{
  (e: 'confirm'): void
}>()
</script>

<template>
  <VueFinalModal 
      class="confirm-modal"
      content-class="confirm-modal-content"
      overlay-transition="vfm-fade"
      content-transition="vfm-fade"
      style=""
  >
    <p class="modal-title">{{ title }}</p>
    <slot />
    <button class="modal-button" @click="emit('confirm')">
      Submit
    </button>
  </VueFinalModal>
</template>

<style lang="scss">
@import "src/sass/colors";
@import "src/sass/variables";

.modal-title {
  font-family: 'Grandis Bold';
  font-size: 12px;
}

.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  @include background1;

  
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
}
.confirm-modal-content > * + *{
  margin: 0.5rem 0;
}
.confirm-modal-content h1 {
  font-size: 1.375rem;
}
.confirm-modal-content button {
  @include button1;

  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  text-align: center;
}
.dark .confirm-modal-content {
  background: #000;
}
</style>