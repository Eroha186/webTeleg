<template>
<div class="flex flex-col">
  <router-view/>
  <div v-if="hueta">
    <navbar/>
  </div>
</div>
</template>


<script setup>
import { computed } from 'vue'
import {useRoute} from "vue-router";

const route = useRoute()
const hueta = computed(() => {
  return route.name !== 'welcome'
})
</script>