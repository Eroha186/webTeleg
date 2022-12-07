<template>
<div class="flex flex-col">
  <router-view/>
  <div v-if="this.$route.name !== 'welcome'">
    <navbar/>
  </div>
</div>
</template>


<script setup>
import navbar from '@/components/common/Navbar.vue'

</script>