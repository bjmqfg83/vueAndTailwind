<script setup>
// import { ref } from "vue";
// const class1 = ref(false);
// const class2 = ref("bg-[#f59210]");
// const class3 = ref("#359f02");
// const error = ref(false);

// // color group
// const colorGroup = ['bg-green-600','bg-red-600'];

// function dynamicClass2() {
//   class2.value = "bg-[#3f415f]";
// }
// function dynamicClass3() {
//   class3.value = "#f59230";
// }
// function dynamicClass4() {
//   error.value = !error.value;
// }
</script>

<template>
  <router-view></router-view>
  <!-- <div class="w-full min-h-[100vh] flex flex-col justify-center items-center">
    <div class="flex">
      <div
        class="w-[150px] h-[150px] text-white"
        :class="{ 'bg-[#bd116a]': !class1, 'bg-[#0da367]': class1 }"
      >
        class1
      </div>
      <div class="w-[150px] h-[150px] text-white ml-5" :class="[`${class2}`]">
        class2
      </div>
      <div class="w-[150px] h-[150px] border ml-5" :class="[`bg-[${class3}]`]">
        class3
      </div>
      <div
        class="w-[150px] h-[150px] border ml-5"
        :class="[`bg-${error ? 'red' : 'green'}-600`]"
      >
        class4
      </div>
    </div>
    <div class="mt-10">
      <button
        class="min-w-20 h-10 px-4 rounded-sm bg-emerald-500 text-white"
        @click="class1 = !class1"
      >
        調整class1
      </button>
      &nbsp;
      <button
        class="min-w-20 h-10 px-4 rounded-sm bg-orange-500 text-white"
        @click="dynamicClass2"
      >
        調整class2
      </button>
      &nbsp;
      <button
        class="min-w-20 h-10 px-4 rounded-sm bg-rose-500 text-white"
        @click="dynamicClass3"
      >
        調整class3
      </button>
      &nbsp;
      <button
        class="min-w-20 h-10 px-4 rounded-sm bg-purple-500 text-white"
        @click="dynamicClass4"
      >
        調整class4
      </button>
    </div>
  </div> -->
</template>

<style lang="scss" scoped></style>
