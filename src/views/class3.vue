<script setup>
import { ref } from "vue";
const class3 = ref("#359f02");

function dynamicClass3() {
  class3.value = "#f59230";
}
</script>

<template>
  <div class="w-full min-h-[100vh] flex flex-col justify-center items-center">
    <div class="flex">
      <div class="w-[150px] h-[150px] border ml-5" :class="[`bg-[${class3}]`]">
        class3
      </div>
    </div>
    <div class="mt-10">
      <button
        class="min-w-20 h-10 px-4 rounded-sm bg-rose-500 text-white"
        @click="dynamicClass3"
      >
        調整class3
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
