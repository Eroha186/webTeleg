<template>
  <nav class="w-full fixed bottom-0 bg-[#003b57] shadow-menu-shadow">
    <ul class="container mx-auto grid grid-cols-3 grid-rows-1">
      <li v-for="item in menuItems" :class="['text-lg font-bold text-white px-5 py-5 text-center', isActive(item.path)]">
        <router-link :to="item.path">
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
    title: 'Welcome',
    path: '/'
  },
  {
    title: 'Профиль',
    path: '/profile'
  },
  {
    title: 'mainPAge',
    path: '/main'
  }
]

const isActive = (path) => {
  return route.path === path ? 'active-tab' : ''
}

</script>

<style scoped>
  .active-tab {
    background: #23a0bf;
  }
</style>
