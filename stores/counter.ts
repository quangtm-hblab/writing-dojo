export const useCounter = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function add(delta: number) {
    count.value += delta
  }

  function reset() {
    count.value = 0
  }

  return { count, doubleCount, increment, decrement, reset, add }
})
