<template>
  <modal @close="handleClose">
    <section class="confirm">
      <div v-if="title" class="confirm__title">{{ title }}</div>
      <div class="confirm__text">{{ message }}</div>
      <footer class="confirm__footer">
        <button @click="handleClose">취소</button>
        <button @click="handleSuccess">확인</button>
      </footer>
    </section>
  </modal>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import Modal from '../index.vue'

interface Props {
  title?: string
  message: string
}

const emit = defineEmits(['close'])
const props = defineProps<Props>()
const { title, message } = toRefs(props)

const handleSuccess = (): void => {
  emit('close', true)
}

const handleClose = (): void => {
  emit('close', false)
}
</script>

<style scoped>
.confirm {
  max-width: 326px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.confirm__title {
  font-size: 16px;
  font-weight: 600;
}

.confirm__text {
  font-size: 14px;
  font-weight: 400;
}

.confirm__footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
