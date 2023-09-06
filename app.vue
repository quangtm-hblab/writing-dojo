<script setup>
const { locale } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
      <p class="text-3xl font-bold underline">{{ $t('welcome') }}</p>
    </form>
  </div>
</template>
