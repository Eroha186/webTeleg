<template>
  <div class="w-full bg-white border border-gray-200 dark:border-gray-900 rounded-lg py-5 shadow-md dark:bg-[#103141]">
    <div class="flex flex-col items-center">
      <div class="relative">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="@/assets/user.jpg" alt="Bonnie image"/>
        <div :class="['absolute flex flex-col items-center border-white dark:border-[#103141] border-4 justify-center w-[43px] h-[43px] text-sm font-bold right-0 bottom-0 rounded-full text-white', bgColor(winRate)]">
          <span>
            {{ winRate }}%
          </span>
        </div>
      </div>
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ name }} {{ surname }}</h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">{{ username }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  winRate: {
    type: Number,
    required: true
  },
})

const bgColor = (winRate) => {
  let colorStyle = 'bg-red-400'
  if (winRate >= 40 && winRate <= 70) {
    colorStyle = 'bg-[#f9bc60]'
  } else if (winRate > 70) {
    colorStyle = 'bg-green-400'
  }

  return colorStyle
}

</script>