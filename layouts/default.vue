import { NuxtLink } from '../.nuxt/components';
<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <header class="flex justify-around">
      <NuxtLink to="/"> DOJO</NuxtLink>
      <NuxtLink to="/home">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/counter">Couter</NuxtLink>
      <NuxtLink to="/product">Products</NuxtLink>
      Default layout header
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
    </header>
    <!-- <p class="text-3xl font-bold underline">{{ $t('welcome') }}</p> -->
    <div>
      <slot />
    </div>
  </div>
</template>
<script>
// const { locale } = useI18n()
export default {}
</script>
<style lang=""></style>
