<template>
  <div class="grid grid-cols-1 grid-rows-auto gap-y-2.5">
    <UserCardPreloader v-if="preLoading"/>
    <UserCard
        v-else
        :name=data.name
        :surname=data.surname
        :username=data.username
        :win-rate=data.winRate
    />
    <MatchList/>
  </div>
</template>

<script setup>
import UserCard from '@/components/profilePage/UserCard.vue'
import MatchList from '@/components/common/MatchList.vue'
import {getUserInfo} from "@/api/user";
import {onMounted, ref} from "vue";
import UserCardPreloader from "@/components/profilePage/UserCardPreloader.vue";

let data = ref({})
let preLoading = ref(true)

onMounted(async () => {
  const response = await getUserInfo()

  data.value = response.data
  preLoading.value = false
})

</script>