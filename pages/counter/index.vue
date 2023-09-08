<script setup lang="ts">
import { useCounter } from '../../stores/counter'
const counter = useCounter()
</script>

<template>
  <div>
    <div>Counter: {{ counter.count }}</div>
    <div>Double Counter: {{ counter.doubleCount }}</div>
    <div class="flex">
      <button class="mx-2" @click="counter.increment()">increment</button>
      <button class="mx-2" @click="counter.decrement()">decrement</button>
      <button class="mx-2" @click="counter.add(6)">Custom add</button>
      <button class="mx-2" @click="counter.reset()">reset</button>
    </div>
  </div>
</template>
