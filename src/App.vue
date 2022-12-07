<template>
<div class="flex flex-col">
  <router-view/>
  <div v-if="hasNavbar">
    <navbar/>
  </div>
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