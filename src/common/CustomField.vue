<script setup lang="ts">
defineProps<{
  label: string;
  value: string | null | undefined;
}>();
</script>

<template>
  <div class="field-container">
    <label class="label">{{  label  }}</label>

    <p v-if="value" class="value">{{  value  }}</p>

    <p v-else>NA</p>
  </div>
</template>


<style lang="scss" scoped>
.field-container {
  display: flex;
  flex-direction: column;
  padding: 3px 5px;
}

.label {
  font-family: 'Grandis Bold';
  font-size: 12px;
  margin-bottom: 4px;
}

.value {
  font-size: 18px;
}
</style>