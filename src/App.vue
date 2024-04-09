<script setup lang="ts">
import { RouterView } from 'vue-router'
import ModalContainer from './components/modal/modal-container.vue'
</script>

<template>
  <ModalContainer>
    <RouterView />
  </ModalContainer>
</template>

<style scoped></style>
