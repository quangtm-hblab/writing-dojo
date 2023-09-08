<!-- eslint-disable vue/no-unused-vars -->
<template lang="">
  <div>
    <div>Product list</div>
    <div v-for="p in productStore.products" :key="p.id">
      {{ p.title }}
    </div>
  </div>
</template>

<script setup>
import { useProduct } from '../../stores/product'
const productStore = useProduct()

// get5product1
// const { data } = await useAsyncData('products', () =>
//   $fetch('/products', {
//     params: { limit: 5 },
//     method: 'GET',
//     baseURL: 'https://fakestoreapi.com',
//   }),
// )

// get5product2
// const { data } = await useAsyncData('products', () =>
//   productStore.get5product(),
// )

onMounted(async () => {
  const { data } = await productStore.get5product()
  productStore.setProducts(data.value)
})
</script>
