<template>
  <div class="w-full mx-auto container relative flex flex-col items-center top-1/2 -translate-y-1/2">
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/logo.png"/>
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/dc.png"/>
    <button class="px-5 py-2.5 bg-amber-600 text-white" @click="loginMock">Login</button>
  </div>
</template>

<script setup>
import { loginApi } from "@/api/user"
import { onMounted } from "vue"
import router from "@/router";

onMounted(() => {
  Telegram.WebApp.MainButton
      .setText('Get user Info')
      .show()
      .onClick(async () => {
        await login()
      })
})

const loginMock = () => {
  router.push({name: 'main'})
}

const login = async () => {
  await loginApi({
    id: Telegram.WebApp.initDataUnsafe.user.id,
    name: Telegram.WebApp.initDataUnsafe.user.username,
  })
}

</script>
