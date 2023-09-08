export const useProduct = defineStore('product', () => {
  const config = useRuntimeConfig()
  const products = ref([])
  function setProducts(data) {
    products.value = data
  }

  // function get5product() {
  //   return $fetch('/products', {
  //     params: { limit: 5 },
  //     method: 'GET',
  //     baseURL: config.public.baseURL,
  //   })
  // }

  async function get5product() {
    return await useAsyncData('products', () =>
      $fetch('/products', {
        params: { limit: 5 },
        method: 'GET',
        baseURL: config.public.baseURL,
      }),
    )
  }

  return { products, setProducts, get5product }
})
