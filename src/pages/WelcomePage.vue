<template>
  <div class="flex flex-col">
    <div class="w-full mx-auto container relative flex flex-col items-center top-1/2">
      <img alt="Vue logo" class="logo mx-auto" src="@/assets/logo.png"/>
      <img alt="Vue logo" class="logo mx-auto" src="@/assets/dc.png"/>
      <button class="px-5 py-2.5 bg-amber-600 text-white" @click="login">Login</button>
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

const loginMock = async () => {
  // mainButton.hide()
  // router.push({name: 'main'})
  const response = await loginApi({
    telegram_id: '21343535',
    name: 'Tester',
    surname: 'Epta',
    username: 'Hooli',
    avatar: 'https://www.meme-arsenal.com/memes/48b0ae9773ccb06b52ad36807c887f82.jpg'
  })

  localStorage.setItem('token', response.data.token)

  router.push({name: 'profile'})
}

const login = async () => {
  await loginApi({
    telegram_id: `${Telegram.WebApp.initDataUnsafe.user.id}`,
    name: Telegram.WebApp.initDataUnsafe.user.first_name,
    surname: Telegram.WebApp.initDataUnsafe.user.last_name,
    username: Telegram.WebApp.initDataUnsafe.user.username,
    avatar: Telegram.WebApp.initDataUnsafe.user.photo_url,
  })
  mainButton.hide()
  router.push({name: 'profile'})
}

</script>
