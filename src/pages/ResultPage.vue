<template>
  <div class="grid grid-cols-5 grid-rows-3 gap-y-2">
    <div class="col-span-2">
      <select disabled
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="123" selected disabled>Name</option>
      </select>
    </div>
    <div class="text-center flex items-center justify-center text-white bold text-xl">VS</div>
    <div class="col-span-2">
      <select
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="" selected disabled>Соперник</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </select>
    </div>

    <div class="col-span-2">
      <input type="number" placeholder="счет" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div class="text-center flex items-center justify-center text-white bold text-xl">:</div>
    <div class="col-span-2">
      <input type="number" placeholder="счет" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>

    <div class="col-span-5 flex justify-center items-center">
      <button type="button" class="w-1/2 text-white bg-blue-700 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
    </div>

  </div>
</template>

<style scoped>
option[value=""][disabled] {
  display: none;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

select {
  -webkit-appearance: none;
}
</style>