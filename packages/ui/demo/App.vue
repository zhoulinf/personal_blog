<script setup lang="ts">
import {BaseInput} from '@/input';
import {BaseButton} from '@/button/src/button';
</script>

<template>
  <div class="w-full h-full">
    <BaseInput></BaseInput>
    <BaseButton
      type="primary"
      size="middle"
    >
      内容
    </BaseButton>
  </div>
</template>


<style scoped></style>
