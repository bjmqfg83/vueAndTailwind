<script setup>
import { ref } from "vue";
const error = ref(false);
function dynamicClass4() {
  error.value = !error.value;
}
</script>

<template>
<div class="w-full min-h-[100vh] flex flex-col justify-center items-center">
    <div class="flex">
      <div
        class="w-[150px] h-[150px] border ml-5"
        :class="[`bg-${error ? 'red' : 'green'}-800`]"
      >
        class4
      </div>
    </div>
    <div class="mt-10">
      <button
        class="min-w-20 h-10 px-4 rounded-sm bg-purple-500 text-white"
        @click="dynamicClass4"
      >
        調整class4
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
