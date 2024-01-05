import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
  state: () => {
    const name = ref('')
    const sign = ref(true)
    const value = ref(0)

    const category = { name: name, sign: sign, value: value }

    return category
  },
  actions: {
    changeNewEntry(category: { name: string; sign: boolean; value: number }) {
      this.name = category.name
      this.sign = category.sign
      this.value = category.value
    }
  }
})
