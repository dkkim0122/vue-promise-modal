<template>
  <Teleport :to="`#${CONTAINER_ID}`">
    <section class="modal-container">
      <div ref="modalBody" class="modal">
        <header v-if="slots.header" class="modal-header">
          <slot name="header" />
        </header>
        <div class="modal-content">
          <slot />
        </div>
      </div>
    </section>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, useSlots } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { CONTAINER_ID } from '@/components/modal/modal.constant'

const emit = defineEmits(['close'])

const slots = useSlots()

const modalBody = ref<HTMLElement | null>(null)

const onClose = (value?: unknown): void => {
  emit('close', value)
}

onClickOutside(modalBody, onClose)
</script>

<style scoped>
.modal-container {
  width: 100%;
  height: 100vh;
  left: 0;
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal {
  border: 1px solid gainsboro;
  border-radius: 4px;
  background-color: white;
  width: max-content;
}

.modal-header {
  position: relative;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
}
</style>
