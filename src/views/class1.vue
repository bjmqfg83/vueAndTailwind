<script setup>
import { ref } from "vue";
const class1 = ref(false);
</script>

<template>
  <div class="w-full min-h-[100vh] flex flex-col justify-center items-center">
    <div class="flex">
      <div
        class="w-[150px] h-[150px] text-white"
        :class="{ 'bg-[#bd116a]': !class1, 'bg-[#0da367]': class1 }"
      >
        class1
      </div>
    </div>
    <div class="mt-10">
      <button
        class="min-w-20 h-10 px-4 rounded-sm bg-emerald-500 text-white"
        @click="class1 = !class1"
      >
        調整class1
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
