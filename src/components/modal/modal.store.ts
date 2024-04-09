import { defineStore } from 'pinia'
import { ref, type Component, markRaw } from 'vue'
import type { ComponentProps, Modal } from './modal.type'

export const useModalStore = defineStore('modal', () => {
  const modalList = ref<Modal[]>([])

  const deleteModal = (id: string): void => {
    modalList.value = modalList.value.filter(toast => toast.id !== id)
  }

  const clearModal = (): void => {
    modalList.value.forEach(modal => {
      modal.onClose(null)
      deleteModal(modal.id)
    })
  }

  const handleResolver = (id: Modal['id'], resolver: Modal['onClose'], value?: unknown): void => {
    resolver(value)
    deleteModal(id)
  }

  const openModal = async <C extends Component>(
    id: Modal['id'],
    component: C,
    props: ComponentProps<C>,
  ): Promise<unknown> => {
    return await new Promise(resolve => {
      const newModal: Modal = {
        id,
        component: markRaw(component),
        props,
        onClose: (value: unknown) => {
          handleResolver(id, resolve, value)
        },
      }

      modalList.value = [...modalList.value, newModal]
    })
  }

  return { modalList, openModal, clearModal }
})
