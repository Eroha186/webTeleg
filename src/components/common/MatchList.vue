<template>
  <div>
    <h1 class="my-4 text-center text-2xl dark:text-white">Список всех игр</h1>
    <div class='w-full pb-3 pt-3 mx-auto bg-white shadow-md border border-gray-200 dark:border-gray-900 rounded-lg dark:bg-[#103141]'>
      <details v-for="item in 10" class="w-full bg-white border-b border-b-gray-200 dark:border-b-gray-900 cursor-pointer mb-3 dark:bg-[#103141]">
        <summary class="w-full bg-white text-dark flex justify-between px-4 pb-3 dark:bg-[#103141]">
          <div class="grid grid-cols-3 grid-rows-1 w-full text-center dark:text-white">
            <div class="flex flex-row items-center">
              <div>
                <img class="w-10 h-10 mr-2 rounded-full mirror" src="@/assets/user.jpg" alt="Bonnie image"/>
              </div>
              <div>Name 1</div>
            </div>
            <div class="flex justify-center items-center">
              1:2
            </div>
            <div class="flex flex-row-reverse items-center">
              <div>
                <img class="w-10 h-10 ml-2 rounded-full" src="@/assets/user.jpg" alt="Bonnie image"/>
              </div>
              <div>Name {{ item }}</div>
            </div>
          </div>
        </summary>
        <div class="px-4 pb-3 description">
          <div v-for="item in 3" class="grid grid-cols-3 grid-rows-1 w-full text-center dark:text-white">
            <div class="text-red-400">
              Looser
            </div>
            <div>
              9:11
            </div>
            <div class="text-green-400">
              Winner
            </div>
          </div>
        </div>
      </details>
    </div>
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
  .mirror {
    transform: scale(-1,1);
  }
</style>