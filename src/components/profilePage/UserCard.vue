<template>
  <div class="w-full bg-white border border-gray-200 dark:border-gray-900 rounded-lg pt-5 shadow-md dark:bg-[#103141]">
    <div class="flex flex-col items-center pb-10">
      <div class="relative">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="@/assets/user.jpg" alt="Bonnie image"/>
        <div class="absolute flex flex-col items-center custom-border-color border-4 justify-center w-[37px] h-[37px] text-sm font-bold right-0 bottom-0 rounded-full  text-white">
          <span>
            10%
          </span>
        </div>
      </div>
      <div class="w-[100px] h-[100px] border-4 dark:border-[#103141]"></div>
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
    </div>
  </div>
</template>

<style scoped>
.custom-border-color {
  border: 4px solid #103141
}
</style>