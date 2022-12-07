<template>
  <div class="w-full mx-auto container relative flex flex-col items-center top-1/2 -translate-y-1/2">
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/logo.png"/>
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/dc.png"/>
    <button @click="login">Отправить</button>
    <div class="break-words text-white" v-data="a">
      {{ a }}
    </div>
    <div class="break-words text-white" v-data="b">
      {{ b }}
    </div>
    <div class="break-words text-white" v-data="c">
      {{ c }}
    </div>
  </div>
</template>

<script setup>
  import { loginApi } from "@/api/user"
  import {onMounted, ref} from "vue"

  const a = ref()
  const b = ref()
  const c = ref()

  onMounted(() => {
    Telegram.WebApp.MainButton
        .setText('Get user Info')
        .show()
        .onClick(async () => {
          await login()
        })
    a.value = JSON.stringify(Telegram.WebApp.initDataUnsafe)
    b.value = Telegram.WebApp.initDataUnsafe.id
    c.value = Telegram.WebApp.initDataUnsafe.username
  })

  const login = async () => {
    await loginApi({
      id: Telegram.WebApp.initDataUnsafe.id,
      name: Telegram.WebApp.initDataUnsafe.username,
    })
  }

</script>

