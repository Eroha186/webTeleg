<template>
  <div class='w-full pb-3 pt-3 mx-auto bg-white shadow-md border border-gray-200 rounded-lg dark:bg-[#103141]'>
    <details v-for="item in 10" class="w-full bg-white border-b border-b-[#23a0bf] dark:border-b-[#003b57] cursor-pointer mb-3 dark:bg-[#103141]">
      <summary class="w-full bg-white text-dark flex justify-between px-4 pb-3 dark:bg-[#103141]">
        <div class="grid grid-cols-3 grid-rows-1 w-full text-center">
          <div>
            Name 1
          </div>
          <div>
            1:2
          </div>
          <div>
            Name {{ item }}
          </div>
        </div>
      </summary>
      <div class="px-4 pb-3 description">
        <div v-for="item in 3" class="grid grid-cols-3 grid-rows-1 w-full text-center">
          <div>
            L
          </div>
          <div>
            9:11
          </div>
          <div>
            W
          </div>
        </div>
      </div>
    </details>
  </div>
</template>

<style scoped>
  details summary::-webkit-details-marker {
    display:none;
  }
  details:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border: unset;
  }
  details:last-child summary {
    padding-bottom: 0;
    margin-bottom: 0;
    border: unset;
  }
  details:last-child .description {
    padding-top: 0.75rem;
  }
</style>