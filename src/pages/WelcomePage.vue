<template>
  <div class="flex flex-col">
    <div class="w-full mx-auto container relative flex flex-col items-center top-1/2">
      <img alt="Vue logo" class="logo mx-auto" src="@/assets/logo.png"/>
      <img alt="Vue logo" class="logo mx-auto" src="@/assets/dc.png"/>
      <button class="px-5 py-2.5 bg-amber-600 text-white" @click="loginMock">Login</button>
    </div>
  </div>
</template>

<script setup>
import { loginApi } from "@/api/user"
import { onMounted } from "vue"
import router from "@/router";

const mainButton = Telegram.WebApp.MainButton;

onMounted(() => {
  mainButton
      .setText('Get user Info')
      .show()
      .onClick(() => {
        loginMock()
      })
})

const loginMock = () => {
  mainButton.hide()
  router.push({name: 'main'})
}

const login = async () => {
  await loginApi({
    id: Telegram.WebApp.initDataUnsafe.user.id,
    name: Telegram.WebApp.initDataUnsafe.user.username,
  })
  mainButton.hide()
}

</script>
