<template>
  <div class="w-full mx-auto container relative flex flex-col items-center top-1/2 -translate-y-1/2">
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/logo.png"/>
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/dc.png"/>
    <button @click="login">Отправить</button>
  </div>
</template>

<script setup>
  import { loginApi } from "@/api/user"
  import {onMounted, ref} from "vue"

  const a = ref()
  a.value = 1

  onMounted(() => {
    Telegram.WebApp.MainButton
        .setText('Get user Info')
        .show()
        .onClick(async () => {
          await login()
        })
  })

  const login = async () => {
    await loginApi({
      id: Telegram.WebApp.initDataUnsafe.id,
      name: Telegram.WebApp.initDataUnsafe.username,
    })
  }

</script>

