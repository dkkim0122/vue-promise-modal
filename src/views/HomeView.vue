<script setup lang="ts">
import { useModalStore } from '@/components/modal/modal.store'
import Confirm from '@/components/modal/base/confirm.vue'

const modalStore = useModalStore()
const { openModal } = modalStore

const handleClick = async () => {
  const isConfirmed = await openModal('Confirm', Confirm, {
    title: '안녕하신가요?',
    message: '안녕하다면 확인을, 안녕하지 못하다면 취소를 눌러주세요.'
  })

  if (isConfirmed) {
    alert('안녕하다!!!!!')
  } else {
    console.log('안녕하지 못하다...')
  }
}
</script>

<template>
  <main>
    <button @click="handleClick">Open Modal</button>
  </main>
</template>
