<template>
  <nav class="w-full fixed bottom-0 bg-[#23a0bf] dark:bg-[#003b57]">
    <ul class="container mx-auto grid grid-cols-3 grid-rows-1">
      <li v-for="item in menuItems" :class="[isActive(item.path)]">
        <router-link :to="item.path" class="text-lg font-bold text-white w-full text-center py-5 inline-block">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()

const menuItems = [
  {
    title: 'Профиль',
    path: '/profile'
  },
  {
    title: 'Все игры',
    path: '/main'
  },
  {
    title: 'Результат',
    path: '/result'
  }
]

const isActive = (path) => {
  return route.path === path ? 'active-tab' : ''
}

</script>

<style scoped>
  .active-tab {
    background: #56C5DF;
  }

  @media (prefers-color-scheme: dark) {
    .active-tab {
      background: #23a0bf;
    }
  }
</style>
