import { NuxtLink } from '../.nuxt/components';
<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <header>
      <NuxtLink to="/home">Home</NuxtLink>
      <QButton>
        <NuxtLink to="/about">About</NuxtLink>
      </QButton>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>

      Default layout header
    </header>

    <!-- <p class="text-3xl font-bold underline">{{ $t('welcome') }}</p>
      <QButton>
        <NuxtLink to="/home">Home</NuxtLink>
      </QButton> -->

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
