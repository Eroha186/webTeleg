<template>
<div class="flex flex-col">
  <router-view/>
  <div>
    <navbar/>
  </div>
</div>
</template>


<script setup>
import navbar from '@/components/common/Navbar.vue'
</script>