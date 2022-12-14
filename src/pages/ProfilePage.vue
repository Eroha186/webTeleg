<template>
  <div class="grid grid-cols-1 grid-rows-auto gap-y-2.5">
    <UserCard
      name="Dmitry"
      first-name="Efanov"
      nick-name="@eroha186"
      percentage-of-wins="77"
    />
    <MatchList/>
  </div>
</template>

<script setup>
import UserCard from '@/components/profilePage/UserCard.vue'
import MatchList from '@/components/common/MatchList.vue'
</script>