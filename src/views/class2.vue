<script setup>
import { ref } from "vue";
const class2 = ref("bg-[#f59210]");
function dynamicClass2() {
  class2.value = "bg-[#3f415f]";
}
</script>

<template>
  <div class="w-full min-h-[100vh] flex flex-col justify-center items-center">
    <div class="flex">
      <div class="w-[150px] h-[150px] text-white ml-5" :class="[`${class2}`]">class2</div>
    </div>
    <div class="mt-10">
      <button
        class="min-w-20 h-10 px-4 rounded-sm bg-orange-500 text-white"
        @click="dynamicClass2"
      >
        調整class2
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
