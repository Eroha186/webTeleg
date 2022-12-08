<template>
  <div class="pb-10">
    <router-view/>
  </div>
  <div v-if="hasNavbar">
    <navbar/>
  </div>
</template>


<script setup>

import { useRoute } from 'vue-router'
import {computed} from 'vue'
import navbar from '@/components/common/Navbar.vue'

const route = useRoute()

const hasNavbar = computed(() => {
  return route.name !== 'welcome'
})

</script>