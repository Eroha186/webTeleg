<template>
  <div class="w-full bg-white border border-gray-200 dark:border-gray-900 rounded-lg pt-5 shadow-md dark:bg-[#103141]">
    <div class="flex flex-col items-center pb-10">
      <div class="relative">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="@/assets/user.jpg" alt="Bonnie image"/>
<!--  bg-red-400 -->
<!--  bg-green-400 -->
<!--  bg-[#f9bc60] -->
        <div :class="['absolute flex flex-col items-center border-white dark:border-[#103141] border-4 justify-center w-[43px] h-[43px] text-sm font-bold right-0 bottom-0 rounded-full text-white', bgColor(percentageOfWins)]">
          <span>
            {{ percentageOfWins }}%
          </span>
        </div>
      </div>
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ name }} {{ firstName }}</h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">{{ nickName }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  nickName: {
    type: String,
    required: true
  },
  percentageOfWins: {
    type: Number,
    required: true
  },
})

const bgColor = (percentageOfWins) => {
  let colorStyle = 'bg-red-400'
  if (percentageOfWins >= 40 && percentageOfWins <= 70) {
    colorStyle = 'bg-[#f9bc60]'
  } else if (percentageOfWins > 70) {
    colorStyle = 'bg-green-400'
  }

  return colorStyle
}

</script>