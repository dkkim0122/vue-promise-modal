<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <slot />
  <template v-for="modal in modalList" :key="modal.id">
    <component :is="modal.component" v-bind="modal.props" @close="modal.onClose" />
  </template>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useModalStore } from '@/components/modal/modal.store'
import { CONTAINER_ID } from '@/components/modal/modal.constant'

const modalStore = useModalStore()
const { modalList } = storeToRefs(modalStore)

onMounted(() => {
  if (document.getElementById(CONTAINER_ID) != null) return
  const modalContainer = document.createElement('div')
  modalContainer.id = CONTAINER_ID
  document.body.append(modalContainer)
})
</script>

<style scoped></style>
